const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      planetas: [],
      people: [],
      favoritos: [],
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
    },
    actions: {
      addFav: (name, id)=>{
        const store = getStore();
        console.log("elm a fav", name)
        setStore({favoritos:[...store.favoritos, {name,id}]})

      },
      deleteFav: (index)=>{
        const store = getStore();
        setStore({favoritos:[...store.favoritos.filter((fav)=>fav.id !== index)]})
      },
      getPeople: ()=>{
        fetch("https://www.swapi.tech/api/people").then(response=>response.json())
        .then(data => setStore({people: data.results}))
      },
      getPlanetas: () => {
        fetch("https://www.swapi.tech/api/planets")
          .then((response) => response.json())
          .then((data) => {
            console.log(data.results);
            setStore({ planetas: data.results });
          });
      },
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      loadSomeData: () => {
        /**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
	  testGetStore:()=>{
		console.log(getStore())
	  }
    },
  };
};

export default getState;
