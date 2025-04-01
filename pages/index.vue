<template>
  <v-container>
    <h1 class="text-center">University of Constantinople</h1>
    <v-col align-self="stretch">
      <v-btn class="mr-3" variant="elevated" color="primary" @click="goToCalendar"
        >Go to Calendar</v-btn
      >

      <v-btn color="primary" @click="goToNews">View News</v-btn>
    </v-col>

    <v-container class="py-4">
      <v-row justify="center">
        <v-col cols="12" md="8">
          <v-sheet class="pa-6" elevation="2" rounded>
            <v-row>
              <v-col>
                <h1 class="text-h5 mb-4">Pandidakterion Overview</h1>
                <p>
                  The <strong>Pandidakterion</strong> was an early Byzantine
                  center of higher learning established in
                  <strong>425 AD</strong> by Emperor Theodosius II in
                  Constantinople. It represents one of the first state-sponsored
                  initiatives to formalize education for future civil servants
                  in the Eastern Roman Empire.
                </p>
                <h2 class="text-h6 mt-6">Key Features</h2>
                <h3 class="mt-4">Founding and Purpose:</h3>
                <p>
                  Founded in 425 AD, the Pandidakterion was created with the
                  primary goal of training officials for the imperial
                  administration. This institution marked the first deliberate
                  effort by the Byzantine state to standardize and control
                  higher education.
                </p>
                <h3 class="mt-4">Curriculum and Structure:</h3>
                <p>
                  The original organization of the school featured
                  <strong>31 chairs</strong> divided among several subjects:
                </p>
                <ul>
                  <li>
                    <strong>Grammar:</strong> 10 chairs for Greek and 10 for
                    Latin grammar
                  </li>
                  <li><strong>Law:</strong> 2 chairs</li>
                  <li><strong>Philosophy:</strong> 1 chair</li>
                  <li>
                    <strong>Rhetoric:</strong> 8 chairs (instruction offered in
                    both Greek and Latin)
                  </li>
                </ul>
                <p>
                  This diverse curriculum underscores its role in providing a
                  classical education designed to prepare students for roles in
                  public service and administration.
                </p>
                <h3 class="mt-4">Evolution and Legacy:</h3>
                <p>
                  Although the Pandidakterion lacked the corporative structure
                  seen in later Western medieval universities, its establishment
                  laid important groundwork for formal higher education. In
                  1046, Emperor Constantine IX Monomachos reformed the
                  institution by creating distinct departments for law and
                  philosophy. The institution continued in various forms until
                  the fall of Constantinople in <strong>1453</strong>.
                </p>
                <h2 class="text-h6 mt-6">Historical Significance</h2>
                <p>
                  The Pandidakterion is significant not only because it was one
                  of the earliest state-funded educational institutions but also
                  because it illustrates the Byzantine commitment to reinforcing
                  state control and cultural continuity through education.
                  Although its structure differed from later European
                  universities, it remains a key example of early higher
                  education in the medieval world.
                </p>
                <h2 class="text-h6 mt-6">In Summary</h2>
                <ul>
                  <li><strong>Founded:</strong> 425 AD by Theodosius II</li>
                  <li>
                    <strong>Purpose:</strong> Educate and prepare officials for
                    state service
                  </li>
                  <li>
                    <strong>Structure:</strong> 31 chairs covering grammar
                    (Greek &amp; Latin), law, philosophy, and rhetoric
                  </li>
                  <li>
                    <strong>Reforms:</strong> Refounded in 1046 by
                    Constantine IX Monomachos (departments of law and
                    philosophy)
                  </li>
                  <li>
                    <strong>Legacy:</strong> A precursor to modern universities,
                    emphasizing state involvement in higher education
                  </li>
                </ul>
                <v-container>
                  <v-dialog max-width="500">
                    <template v-slot:activator="{ props: activatorProps }">
                      <v-btn
                        v-bind="activatorProps"
                        color="surface-variant"
                        text="Our Founder"
                        variant="flat"
                      ></v-btn>
                    </template>
                    <template v-slot:default="{ isActive }">
                      <v-card title="The Almighty Emperor">
                        <v-card-text>
                          The Founder of our University:
                          <h1>Theodosius II.</h1>
                        </v-card-text>
                        <v-img
                          max-height="400"
                          position="center"
                          src="/theodosius.png"
                        >
                        </v-img>
                        <v-card-actions>
                          <v-spacer></v-spacer>

                          <v-btn
                            text="Close Modal"
                            @click="isActive.value = false"
                          ></v-btn>
                        </v-card-actions>
                      </v-card>
                    </template>
                  </v-dialog>
                </v-container>
              </v-col>
            </v-row>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script setup>
const goToCalendar = () => {
  navigateTo("/calendar");
};

const goToNews = () => {
  navigateTo("/news");
};
</script>
