import { createStore } from "vuex";
import axios from "axios";
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
      console.log("Starting registration process...");
      console.log(payload);
      try {
        console.log("payload: ", payload);
        const { res } = await axios.post(`${miniURL}register`, payload);
        console.log(res.data);
        const { results, err } = await res.data;
        console.log(results, err);
        if (results) {
          console.log("User registered successfully:", results[0]);
          console.log(results);
          console.log(results[0]);
          context.commit("setUser", results[0]);
          context.commit("setSpinner", false);
        } else {
          console.log("Registration error:", err);
          context.commit("setMsg", err);
        }
      } catch (e) {
        console.error("An error occurred:", e);
        context.commit("setMsg", "an error occured");
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
        const res = await axios.post(`${miniURL}login`, payload)
        if(res.status === 200) {
          console.log(res.data)
          const {result, err} = await res.data;
          if(res) {
            context.commit("setUser", result);
          }
          if(err) {
            context.commit("setMsg", err);
          }
        } else {
          console.log(`${res.status}`)
        }
      } catch(error) {
        throw error
      }
    }
  },
  modules: {},
});
