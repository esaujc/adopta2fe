<template>
<div>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="Name"
      :key="memberName"
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

    <v-select
      v-model="select"
      :items="items"
      :rules="[v => !!v || 'Item is required']"
      label="Item"
      required
    ></v-select>

    <v-checkbox
      v-model="checkbox"
      :rules="[v => !!v || 'You must agree to continue!']"
      label="Do you agree?"
      required
    ></v-checkbox>

    <v-btn
      :disabled="!valid"
      color="success"
      @click="validate"
    >
      Validate
    </v-btn>

    <v-btn
      color="error"
      @click="reset"
    >
      Reset Form
    </v-btn>

    <v-btn
      color="warning"
      @click="resetValidation"
    >
      Reset Validation
    </v-btn>
  </v-form><template>
  <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1">Name of step 1</v-stepper-step>

      <v-divider> </v-divider>

      <v-stepper-step :complete="e1 > 2" step="2">Name of step 2</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="3">Name of step 3</v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-text-field
      v-model="memberId"
      :counter="10"
      :rules="memberIdRules"
      label="Número de Socio"
      :key="memberIdNumber"
      required
    ></v-text-field>

    <v-checkbox
      v-model="checkboxActive"
      :rules="[v => !!v || 'You must agree to continue!']"
      label="Socio Activo?"
    ></v-checkbox>
    <v-checkbox
      v-model="checkboxHasMembershipId"
      :rules="[v => !!v || 'You must agree to continue!']"
      label="Tiene número de Socio?"
      required
    ></v-checkbox>

    <v-layout row wrap>
    <v-flex xs12 sm6>
      <v-date-picker v-model="picker" color="green lighten-1"></v-date-picker>
    </v-flex>
    <v-flex xs12 sm6>
    <v-menu
        v-model="menu2"
        :close-on-content-click="false"
        :nudge-right="40"
        lazy
        transition="scale-transition"
        offset-y
        full-width
        min-width="290px"
      >
        <template v-slot:activator="{ on }">
          <v-text-field
            v-model="date"
            label="Picker without buttons"
            prepend-icon="event"
            readonly
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker v-model="date" @input="menu2 = false"></v-date-picker>
      </v-menu>
    </v-flex>
  </v-layout>

    <v-text-field
      v-model="memberId"
      :counter="10"
      :rules="memberIdRules"
      label="Número de Socio"
      :key="memberIdNumber"
      required
    ></v-text-field>

        <v-card
          class="mb-5"
          color="grey lighten-1"
          height="200px"
        ></v-card>

        <v-btn
          color="primary"
          @click="e1 = 2"
        >
          Continue
        </v-btn>

        <v-btn flat>Cancel</v-btn>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card
          class="mb-5"
          color="grey lighten-1"
          height="200px"
        ></v-card>

        <v-btn
          color="primary"
          @click="e1 = 3"
        >
          Continue
        </v-btn>
        <v-btn
          color="primary"
          @click="e1 = 1"
        >
          Atrás
        </v-btn>

        <v-btn flat>Cancel</v-btn>
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-card
          class="mb-5"
          color="grey lighten-1"
          height="200px"
        ></v-card>

        <v-btn
          color="primary"
          @click="e1 = 1"
        >
          Continue
        </v-btn>

        <v-btn flat>Cancel</v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>



</div>
    
</template>

<script>

export default {
  data: () => ({
    e1: 0,
    memberName:"",
    memberData: {
      id: "",
      name: ""
    },
    valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters'
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
      select: null,
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4'
      ],
      checkboxActive: true,
      checkboxHasMembershipId: false,

      picker: new Date().toISOString().substr(0, 10),
      picker2: new Date().toISOString().substr(0, 10),    
      menu: false,
      modal: false,
      menu2: false

    }),  

    methods: {
      validate () {
        if (this.$refs.form.validate()) {
          this.snackbar = true
        }
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      }
    },


    async created (){
        this.memberData.id = this.$route.params.id;
        this.memberName = this.$route.params.name;
        // console.log(this.$route.params)
    }
}
</script>