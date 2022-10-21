import { createStore } from 'vuex'

export default createStore({
  state: {
    langList: [
      "Java",
      "Java Script",
      "Ruby",
      "Python",
      "Go",
      "C++"
    ],
    devices: [
      {
        id: 1,
        roleNumber: 4,
        color: 1,
        title: "Bahcelievler",
        description: "bahcelievlerdaki cihazim ankaryayin arkasinda",
        roles: [
          {
            id: 1,
            name: "arka",
            state: 0
          },{
            id: 2,
            name: "on",
            state: 1
          },{
            id: 3,
            name: "yan",
            state: -1
          },{
            id: 4,
            name: "uzak",
            state: 3
          },
        ]
      },
      {
        id: 2,
        roleNumber: 6,
        color: 2,
        title: "Koru",
        description: "korudaki cihazim metroya yakin",
        roles: [
          {
            id: 1,
            name: "stopping",
            state: 2
          },{
            id: 2,
            name: "starting",
            state: 3
          },{
            id: 3,
            name: "active",
            state: 1
          },{
            id: 4,
            name: "inactive",
            state: 0
          },{
            id: 5,
            name: "inactive",
            state: 0
          },{
            id: 6,
            name: "error",
            state: -1
          },
        ]
      }
    ]
  },
  getters: {
    modifiedLangList: state => {
      return state.langList.map(lang => {
        return lang.length > 4 ? lang : `${lang} programing language`;
      })
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
