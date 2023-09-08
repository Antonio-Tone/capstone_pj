import { createStore } from "vuex";
import axios from "axios";
import Cookies from "js-cookie";
const miniURL = "https://capstone-api-ec2a.onrender.com/";
import Swal from "sweetalert2";
import router from "../router";
export default createStore({
  state: {
    users: null,
    edit: null,
    user: null,
    vehicles: null,
    vehicle: null,
    spinner: null,
    token: null,
    msg: null,
    viewedVehicle: null,
  },
  getters: {},
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
    setSingleVehicle(state, vehicle) {
      state.viewedVehicle = vehicle;
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
    setEdit(state, edit) {
      state.edit = edit;
    },
    setUserData(state, cresult) {
      state.cresult = cresult;
      if (cresult && cresult.userRole) {
        state.userRole = cresult.userRole;
        localStorage.setItem("cresult", JSON.stringify(cresult));
        console.log(cresult, cresult.userRole);
      } else {
        state.cresult = null;
        state.userRole = null;
        localStorage.removeItem("cresult");
      }
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
      try {
        const { data } = await axios.get(`${miniURL}Vehicles`);
        context.commit("setVehicles", data.results);
      } catch (e) {
        context.commit("setMsg", "an" + e.message);
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
        console.log(payload);
        // Send a POST request to the registration endpoint
        const response = await axios.post(`${miniURL}register`, payload);
        console.log("Received response from server:", response);

        const { err, msg } = response.data;

        if (err) {
          context.commit("setMsg", err);
          Swal.fire({
            icon: "error",
            title: "Error",
            text: err,
            showConfirmButton: false,
          });
        } else if (msg === "User registered successfully!") {
          console.log("User registered successfully");
          Swal.fire({
            icon: "success",
            title: "registered successfully",
            text: "please use you details to login",
            showConfirmButton: false,
          });

          router.push("/login");
        } else if (msg === "Email address is already in use.") {
          Swal.fire({
            icon: "error",
            title: "Email address is already in use.",
            text: "Please enter a different email address",
            showConfirmButton: false,
          });
        }
      } catch (error) {
        // Handle any errors that occur during the request
        console.error("An error occurred during registration:", error);
        context.commit(
          "setMsg",
          "An error occurred during registration. Please try again."
        );
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "An error occurred during registration. Please try again.",
          showConfirmButton: false,
        });
      }
    },

    async logout(context) {
      context.commit("setToken", null);
      context.commit("setUser", null);
      context.commit("Data", null);
      Cookies.remove("authorization");
    },

    async updateUser(context, payload) {
      try {
        const res = await axios.patch(
          `${miniURL}user/${payload.userID}`,
          payload.data
        );
        const { err, msg } = res.data;
        if (err) {
          context.commit("setMsg", err);
        }
        if (msg === "User details were updated successfully") {
          context.dispatch("fetchUsers");
          context.commit("setEdit", msg);
          Swal.fire({
            icon: "success",
            title: "User edited successfully",
            text: "You have successfully updated your account details",
            showConfirmButton: false,
          });
        }
      } catch (e) {
        context.commit("setMsg", "an error occured");
      }
    },
    async deleteUser(context, userID) {
      try {
        const res = await axios.delete(`${miniURL}user/${userID}`);
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
      console.log(payload);
      try {
        const res = await axios.patch(
          `${miniURL}vehicle/${payload.vehicleID}`,
          payload
        );
        const { msg, err } = res.data;
        if (err) {
          context.commit("setMsg", err);
        }
        if (msg === "vehicle record udpated successfully") {
          context.dispatch("fetchVehicles");
          context.commit("setVehicle", msg);
          Swal.fire({
            icon: "success",
            title: "vehicle record updated successfully",
            text: "You have successfully updated your vehicle record",
            showConfirmButton: false,
          });
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
      try {
        const res = await axios.post(`${miniURL}login`, payload);
        const { msg, token, cresult } = res.data;

        if (msg === "You are providing the wrong email") {
          context.commit("setMsg", "You are providing the wrong email");
        } else if (msg === "Logged in!") {
          await Swal.fire({
            icon: "success",
            title: "Logged in Successfully",
            text: `You are now logged in! Welcome, ${cresult.userName}.`,
          });
          console.log(cresult);
          context.commit("setUser", cresult);
          localStorage.setItem("Data", JSON.stringify(cresult));
          localStorage.setItem("Token", token);
          context.commit("setToken", token);
          Cookies.set("authorization", context.state.token, {
            expires: 1,
          });
        } else {
          context.commit("setMsg", "Something went wrong while logging in");
          console.error("Something went wrong while logging in", msg);
        }
      } catch (error) {
        // Handle specific errors here, e.g., axios errors
        console.error("Error during login:", error);
        throw error;
      }
    },
    async check(context) {
      const token = Cookies.get("authorization");
      if (token) {
        context.commit("setToken", token);
      } else {
        context.commit("setUser", null);
        router.push("/login");
      }
    },
    async setData(context) {
      const data = JSON.parse(localStorage.getItem("Data"));
      const token = localStorage.getItem("Token");
      if (data && token) {
        context.commit("setUser", data);
        context.commit("setToken", token);
        setTimeout(() => {
          Cookies.set("authorization", token, {
            expires: 1,
          });
        }, 1000);
      } else {
        context.commit("setUser", null);
        context.commit("setToken", null);
        Cookies.remove("authorization");
      }
    },
    async run(context) {
      context.dispatch("check");
    },
  },
  modules: {},
});
