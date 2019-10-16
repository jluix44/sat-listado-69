<template>

  <v-app  id="app">
    <v-container grid-list-md>
        <v-row>
            <h2>Buscar RFC en Lista 69 SAT</h2>
            <br>
            
        </v-row>
        <v-row>
                <v-col cols=12>
                    <v-textarea
                        solo
                        name="input-7-4"
                        label="Introducir RFC en Mayusculas"
                        v-model="RFCs"
                        rows="20"
                        ></v-textarea>
                        <p class="font-italic">Lsita del SAT actualizada al 25 de septiembre de 2019</p>
                </v-col>
            </v-row>
            <v-row >
                    <v-col cols="12" class="align-btns" >
                        <v-btn color="primary"  @click="buscar" >Buscar</v-btn>
                        <v-btn color="error"  @click="limpiar" >Limpiar</v-btn>
                    </v-col>
            </v-row>
            <v-row>
                <v-col cols="12">
                    <v-data-table
                        :headers="headers"
                        :items="empresas"
                        :items-per-page="10"
                        class="elevation-1"
                    ></v-data-table>
                </v-col>
            </v-row>
    </v-container>

  </v-app >
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.align-btns{
        display: flex;
        justify-content: flex-end;
    }
</style>
																
<script>
//import { mapState } from "vuex";
export default {
    data: () => ({
        RFCs: null,
        empresas: [],
        headers: [
            { text: 'No',                                                                       value: 'No',                  align: 'left',   sortable: true },
            { text: 'RFC',                                                                      value: 'RFC',         align: 'left',  sortable: true },
            { text: 'Nombre del Contribuyente',                                                 value: 'NombredelContribuyente',         align: 'left',  sortable: true },
            { text: 'Situaciondel Contribuyente',                                               value: 'SituaciondelContribuyente',         align: 'left',  sortable: true },
            { text: 'Numero y Fecha de Oficio Global de Presuncion',                            value: 'NumeroyFechadeOficioGlobaldePresuncion',         align: 'left',  sortable: true },
            { text: 'Publicacion PaginaSAT Presuntos',                                          value: 'PublicacionPaginaSATPresuntos',         align: 'left',  sortable: true },
            { text: 'NUmeroy Fecha de oficio global de presuncion',                             value: 'NUmeroyFechadeoficioglobaldepresuncion',         align: 'left',  sortable: true },
            { text: 'Publicacion DOF presuntos',                                                value: 'PublicacionDOFpresuntos',         align: 'left',  sortable: true },
            { text: 'Publicacionpgina SAT desvirtuados',                                        value: 'PublicacionpginaSATdesvirtuados',         align: 'left',  sortable: true },
            { text: 'Nmero y fechadeo ficiog lobal de contribuyentes que desvirtuaron',         value: 'Nmeroyfechadeoficioglobaldecontribuyentesquedesvirtuaron',         align: 'left',  sortable: true },
            { text: 'Publicacion DOF desvirtuados',                                             value: 'PublicacionDOFdesvirtuados',         align: 'left',  sortable: true },
            { text: 'Numero y fecha de oficio global de definitivos',                           value: 'Numeroyfechadeoficioglobaldedefinitivos',         align: 'left',  sortable: true },
            { text: 'Publicacion pagina SAT definitivos',                                       value: 'PublicacionpginaSATdefinitivos',         align: 'left',  sortable: true },
            { text: 'Publicacion DOF definitivos',                                              value: '###',         align: 'left',  sortable: true },
            { text: 'Numero y fecha de oficio global de sentencia favorable',                   value: 'Numeroyfechadeoficioglobaldesentenciafavorable',         align: 'left',  sortable: true },
            { text: 'Publicacion pagina SAT sentencia favorable',                               value: 'PublicacionpaginaSATsentenciafavorable',         align: 'left',  sortable: true },
            { text: 'Numero y fecha de oficio global des entencia favorable',                   value: 'Numeroyfechadeoficioglobaldesentenciafavorable',         align: 'left',  sortable: true },
            { text: 'Publicacion DOF sentencia favorable',                                      value: 'PublicacionDOFsentenciafavorable',         align: 'left',  sortable: true },
        ],
    }),
    created(){
        //this.loadLista69()
        this.$store.dispatch('loadLista69')
    },
    computed:{
        lista69(){
           return this.$store.state.listado69
        }
    },
    methods:{
        //...mapActions('loadLista69'),
        buscar(){
            
            var arr = this.RFCs.split(/\r\n|\r|\n/)
            console.log(arr)
            arr.forEach(element => {
                var as = this.lista69.find(item => item.RFC == element)
                this.empresas.push(as)
            });

            
        },
        limpiar(){
            this.RFCs = null
        }
    }
}
</script>
