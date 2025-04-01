<template>
  <v-container>
    <v-sheet height="600">
      <div v-if="pending">⏳ Betöltés...</div>
      <div v-else-if="error">❌ Hiba: {{ error.message }}</div>
      <v-calendar
        v-else
        prev-icon="mdi-chevron-left"
        next-icon="mdi-chevron-right"
        ref="calendar"
        v-model="focus"
        type="month"
        :events="formattedEvents"
        event-color="color"
        :today="today"
      >
        <template v-slot:event="{ event }">
          <v-chip :color="event.color" dark>
            {{ event.name }}
          </v-chip>
        </template>
      </v-calendar>
    </v-sheet>
  </v-container>
</template>

<script setup>
import { ref, computed } from 'vue'
const { data, pending, error } = await useFetch('http://3.127.249.5:8000/api/uniCalendar')

const focus = ref([new Date()]);
const today = ref(new Date());

const formattedEvents = computed(() =>
  (data.value || []).map((event) => {
    const eventDate = event.dateofevent
      ? parseDate(event.dateofevent)
      : new Date();
    return {
      name: event.title,
      start: eventDate,
      end: eventDate,
      color: getEventColor(event.event_type),
    };
  })
);

const parseDate = (dateString) => {
  if (!dateString) return new Date();
  const datePart = dateString.split(" ")[0];
  const parts = datePart.split("-");
  return new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]));
};

const getEventColor = (eventType) => {
  switch (eventType) {
    case "Open to Public":
      return "blue";
    case "Family Affairs":
      return "red";
    case "Student Affairs":
      return "green";
    case "Registration Required":
      return "orange";
    default:
      return "gray";
  }
};
</script>

<style scoped>
.event {
  font-size: 12px;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
}
</style>
