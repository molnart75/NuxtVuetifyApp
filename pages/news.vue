<script setup>
const { data, pending, error } = await useFetch('http://3.127.249.5:8000/api/news')

const formatDate = (dateString) => {
  if (!dateString) return "Unknown Date";
  const date = new Date(dateString);
  return date.toLocaleString("hu-HU", { 
    year: "numeric", 
    month: "2-digit", 
    day: "2-digit", 
    hour: "2-digit", 
    minute: "2-digit", 
    second: "2-digit" 
  });
};
</script>

<template>
  <div>
    <h1>🎓 Egyetemi Naptár</h1>

    <div v-if="pending">⏳ Betöltés...</div>
    <div v-else-if="error">❌ Hiba: {{ error.message }}</div>
    <v-row v-else dense>
      <v-col
        v-for="item in data"
        :key="item.id"
        cols="12"
        sm="6"
        md="4"
        class="d-flex"
      >
        <v-card outlined class="flex-grow-1">
          <v-card-title>{{ item.title }}</v-card-title>
          <v-card-text> {{ item.body }}</v-card-text>
          <v-card-subtitle>
            Created: {{ formatDate(item.created_at) }}
            <hr>
            Last Update: {{ formatDate(item.updated_at) }}
          </v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
