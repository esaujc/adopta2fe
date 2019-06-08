<template>
  <div>
  <div>This is members page</div>
    <v-data-table
      :headers="headers"
      :items="membersList"
      :search="search"
      :pagination.sync="memberTablePagination"
      :hide-actions="true"
      class="equipments-table"
      color="#ff0000"
    >
      <template v-slot:items="members">
        <tr @click.stop="gotToMemberDetail(members.item)">
          <td><div>{{members.item.isActive}}</div></td>
          <td><div>{{members.item.membershipId}}</div></td>
          <td><div>{{members.item.hasMembershipId}}</div></td>
          <td><div>{{members.item.vinculaliaDateUse}}</div></td>
          <td><div>{{members.item.monoparental}}</div></td>
          <td><div>{{members.item.nif1}}</div></td>
          <td><div>{{members.item.name1}}</div></td>
          <td><div>{{members.item.lastName1}}</div></td>
          <td><div>{{members.item.lastPaymentDate}}</div></td>

        </tr>
      </template>
    </v-data-table>
    </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";

export default {
  data: () => ({
    headers: [
      { text: "Active", value: "isActive" },
      { text: "Membership", value: "membershipId" },
      { text: "Has id?", value: "hasMembershipId" },
      { text: "VinculaliaDate", value: "vinculaliaDateUse" },
      { text: "Monoparetal", value: "monoparental" },
      { text: "NIF", value: "nif1" },
      { text: "Name", value: "name1" },
      { text: "Last Name", value: "lastName1" },
      { text: "Last Payment", value: "lastPaymentDate" }
    ],
    search: "",
    memberTablePagination: {
      descending: true,
      rowsPerPage: -1 // -1 for All
    }
  }),
  async created () {
    await this.fetchMembers();
  },
  computed:{
    ...mapState ('members',{
      membersList: 'membersList'
    }),
  },
  methods: {
    fetchMembers(){
      this.$store.dispatch('members/getAllMembers');
    },
    gotToMemberDetail(item){
      this.$router.push({
        name: 'Member',
        params: {isActive: item.isActive, id: item.membershipId, name: item.name1}
      })
    }
  }

}

</script>