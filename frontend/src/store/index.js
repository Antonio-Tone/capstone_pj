import { createStore } from "vuex";
import axios from "axios";
import Cookies from 'js-cookie'; 
const miniURL = "https://capstone-api-ec2a.onrender.com/";   
 //capstone-api-ec2a.onrender.com
export default createStore({
  state: {
    users: null,
    user: null,
    vehicles: null,
    vehicle: null,
    spinner: null,
    token: null,
    msg: null,
    chosenVehicle: null,
  },
  getters: {},
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
    setSingleVehicle(state, vehicle) {
      state.chosenVehicle = vehicle;
    },
    setUser(state, user) {
      state.user = user;
    },
    setVehicles(state, vehicles) {
      state.vehicles = vehicles;
      console.log(vehicles);
    },
    setVehicle(state, vehicle) {
      state.vehicle = vehicle;
    },
    setToken(state, token) {
      state.token = token;
    },
    setMsg(state, msg) {
      state.msg = msg;
    },
  },
  actions: {
    async fetchUsers(context) {
      try {
        const { data } = await axios.get(`${miniURL}users`);
        context.commit("setUsers", data.results);
      } catch (e) {
        context.commit("setMsg", "an error occured");
      }
    },
    async fetchUser(context) {
      try {
        const { data } = await axios.get(`${miniURL}user`);
        context.commit("setUser", data.results);
      } catch (e) {
        context.commit("setMsg", "an error occured");
      }
    },
    async fetchVehicles(context) {
      try{
        const { data } = await axios.get(`${miniURL}Vehicles`);
        context.commit("setVehicles", data.results);
      } catch (e) {
        context.commit("setMsg", "an" + e.message)
      }
    },
    async fetchVehicle(context) {
      try {
        // might need to add vehicleID here
        const { data } = await axios.get(`${miniURL}vehicle`);
        context.commit("setVehicle", data.results);
      } catch (e) {
        context.commit("setMsg", "an error occured");
      }
    },
   async registerUser(context, payload) {
      try {
        // Send a POST request to the registration endpoint
        const response = await axios.post(`${miniURL}register`, payload);
    
        // Check if the response status is successful (e.g., 200 OK)
        if (response.status === 200) {
          const { results, err } = response.data;
    
          if (results) {
            // If registration is successful, commit the user data to the store
            console.log("User registered successfully:", results[0]);
            context.commit("setUser", results[0]);
          } else if (err) {
            // If there's an error during registration, commit the error message to the store
            console.log("Registration error:", err);
            context.commit("setMsg", err);
          }
        } else {
          // Handle non-successful response status (e.g., display an error message)
          console.error(`Registration request failed with status ${response.status}`);
          context.commit("setMsg", "Registration failed. Please try again.");
        }
      } catch (error) {
        // Handle any errors that occur during the request
        console.error("An error occurred during registration:", error);
        context.commit("setMsg", "An error occurred during registration. Please try again.");
      }
    },
    
    async updateUser(context, payload) {
      try {
        const { res } = await axios.patch(
          `${miniURL}user/${payload.UserID}`,
          payload
        );
        const { msg, err } = res.data;
        if (msg) {
          context.commit("setUser", msg);
        }
        if (err) {
          context.commit("setMsg", err);
        }
      } catch (e) {
        context.commit("setMsg", "an error occured");
      }
    },
    async deleteUser(context, UserID) {
      try {
        const res = await axios.delete(`${miniURL}user/${UserID}`);
        if (res.status === 200) {
          context.commit("setUser", res.data.msg);
        } else {
          context.commit("setMsg", "an error occured, please try again");
        }
      } catch (e) {
        console.error("Error while deleting user: ", e);
        context.commit("setMsg", "an error occured");
      }
    },
    async addVehicle(context, payload) {
      console.log("REACHED");
      try {
        const { res } = await axios.post(`${miniURL}vehicle`, payload);
        const { results, err } = await res.data;
        if (results) {
          context.commit("setVehicle", results[0]);
          context.commit("setSpinner", false);
        } else {
          context.commit("setMsg", msg);
        }
      } catch (e) {
        context.commit("setMsg", "an error occured");
      }
    },
    async updateVehicle(context, payload) {
      try {
        const res = await axios.patch(
          `${miniURL}vehicle/${payload.prodID}`,
          payload
        );
        const { msg, err } = res.data;
        if (msg) {
          context.commit("setVehicle", msg);
        }
        if (err) {
          context.commit("setMsg", err);
        }
      } catch (e) {
        context.commit("setMsg", "an error occured");
      }
    },
    async deleteVehicle(context, vehicleID) {
      try {
        const { res } = await axios.delete(`${miniURL}vehicle/${vehicleID}`);
        const { msg, err } = await res.data;
        if (msg) {
          context.commit("setVehicle", msg);
        } else {
          context.commit("setMsg", err);
        }
      } catch (e) {
        context.commit("setMsg", "an error occured");
      }
    },
    async login(context, payload) {
      try{
        const res = await axios.post(`${miniURL}login`, payload,)
        const expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + 7);
        console.log(res.data);
        const { msg, token, cresult } = await res.data
        console.log(cresult)
        if(msg === "You are providing the wrong email"){
          context.commit("setMsg", "You are providing the wrong email");
        }
        if(msg === "Logged in!"){
          context.commit("setUser", cresult)
          context.commit("setToken", token)
          Cookies.set("authorization", context.state.token, {
            expires: 1
          })
        } else{
          context.commit("setMsg", err)
          console.error("Something went wrong while logging in")
        }
      } catch(error) {
        throw error
      }
    },
    async check(context){
      const token = Cookies.get("authorization")
      if(token){
        context.commit("setToken", token)
      } else{
        context.commit("setUser", null)
        router.push('/login')
      }
    },
    async run(context){
      context.dispatch("check")
    }
  },
  modules: {},
});
