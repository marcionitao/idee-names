import Vue from 'vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import AppItemList from './AppItemList.vue';
import axios from 'axios';

export default Vue.extend({
  name: 'app',
  components: {
    AppItemList
  },
  data() {
    return {
      prefixes: [] as any,
      sufixes: [] as any,     
    };
  },
  methods: {

    addPrefix(prefix: any) {
    // this.prefixes.push(prefix);
      // comunicando com graphql
      axios({
        url: 'http://localhost:4000',
        method: 'post',
        data: {
          query: `
            mutation ($item: ItemInput) {
              newPrefix: saveItem(item: $item) {
                id
                type
                description
              }
            }
          `,
          variables: {
            item: {
              type: 'prefix',
              description: prefix
            }
          }
        }
      }).then(response => {
        //refreshing List
        const query = response.data;
       
        const newPrefix = query.data.newPrefix;
        this.prefixes.push(newPrefix.description);
        // eslint-disable-next-line no-console
        console.log(newPrefix.description);
      });

    },
    deletePrefix(prefix: any) {
      axios({
        url: 'http://localhost:4000',
        method: 'post',
        data: {
          query: `
            mutation ($id: Int) {
              deleted: deleteItem(id: $id)
            }
          `,
          variables: {
            id: prefix.id
          }
        }
      }).then(() => {
        this.getPrefixes();
      });
    },
    addSufix(sufix: any) {
      this.sufixes.push(sufix);
    },
    deleteSufix(sufix: any) {
      this.sufixes.splice(this.sufixes.indexOf(sufix as any),1);
    },
    getPrefixes() {
      axios({
        url: 'http://localhost:4000',
        method: 'post',
        data: {
          query: `
            {
              prefixes: items (type: "prefix") {
                id
                type
                description
              }
            }
          `
        }
      }).then(response => {
        const query =  response.data;
        // eslint-disable-next-line no-console
        console.log(query.data);
        this.prefixes = query.data.prefixes;

      }).catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
    },
    getSufixes() {
      axios({
        url: 'http://localhost:4000',
        method: 'post',
        data: {
          query: `
            {
              sufixes: items (type: "sufix") {
                description
              }
            }
          `
        }
      }).then(response => {
        const query =  response.data;
        // eslint-disable-next-line no-console
        console.log(query.data);
        this.sufixes = query.data.sufixes;
      }).catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
    }
    
  },
  // is ideal to use dynamic interaction and reactive datas, Example: as data input on the screen or updates
  computed: {    
    domains(): any {
      const domains = [];
      for (const prefix of this.prefixes) {
        for (const sufix of this.sufixes) {
          const name = (prefix.description + sufix.description);
          // all letters of the same size
          const url = name.toLowerCase();
          const checkout = `https://checkout.hostgator.com.br/?a=add&sld=${url}&tld=.com.br`;
          //create a Object
          domains.push({
            name,
            checkout
          });
        }      
      }
      return domains;
    }
  },
  // 'created' is run after of 'data()', 'methods()'... is ideal to get datas from backend or using APIs
  created() {
    this.getPrefixes();
    this.getSufixes();
  },
});