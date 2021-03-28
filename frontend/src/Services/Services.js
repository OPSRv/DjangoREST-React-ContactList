// class Services {
//   onSearch = (contactName) => {
//     this.setState({
//       findContact: contactName,
//     });
//   };

//   onShowContactList = (List, findContact) => {
//     if (findContact.length === 0) {
//       return List;
//     }
//     return List.filter((item) => {
//       return item.name.toLowerCase().indexOf(findContact.toLowerCase()) > -1;
//     });
//   };

//   isStar = (id) => {
//     const index = this.state.List.findIndex((elem) => elem.id === id);
//     const tmp = this.state.List.slice();
//     tmp[index].star = !tmp[index].star;
//     this.setState({
//       star: this.tmp,
//     });
//     const data = tmp[index];
//     ContactDataService.update(data.id, data);
//   };

//   onDeleteContact = (id) => {
//     const index = this.state.List.findIndex((elem) => elem.id === id);
//     const partOne = this.state.List.slice(0, index);
//     const partTwo = this.state.List.slice(index + 1);
//     const newList = [...partOne, ...partTwo];
//     this.setState((state) => {
//       return {
//         List: newList,
//       };
//     });
//     ContactDataService.delete(id);
//   };

//   editContact = (id) => {
//     const index = this.state.List.findIndex((elem) => elem.id === id);
//     const currentContact = this.state.List[index];
//     console.log(currentContact, "currentContact- EDIT");
//     this.setState({
//       currentContact: currentContact,
//     });
//     console.log(id, "id");
//   };

//   onEditCurrentContact = (newEditContact) => {
//     const id = newEditContact.id;
//     const index = this.state.List.findIndex((elem) => elem.id === id);
//     const partOne = this.state.List.slice(0, index);
//     const partTwo = this.state.List.slice(index + 1);
//     const newList = [...partOne, newEditContact, ...partTwo];
//     this.setState({
//       List: newList,
//     });
//   };

//   addContact = (newContact) => {
//     ContactDataService.create(newContact);
//     this.state.List.push(newContact);
//     const newListAdd = this.state.List;
//     this.setState({
//       List: newListAdd,
//     });
//   };

//   getCreateAccount = (newUser) => {
//     console.log(newUser, "newUser - authorization");
//     let createUser = newUser;
//     console.log(createUser, "createUser - getCreateAccount - INDEX");
//     axios({
//       method: "post",
//       url: "http://127.0.0.1:8000/auth/register/",
//       data: createUser,
//     })
//       .then(function (response) {
//         console.log(response.status, "getCreateAccount - response - Вітаю");
//       })
//       .catch(function (error) {
//         console.log(error, "error getCreateAccount - INDEX");
//       });
//   };

//   singInorization = (newAuth) => {
//     console.log(newAuth);
//     let userAuth = newAuth;
//     axios({
//       method: "post",
//       url: "http://127.0.0.1:8000/auth/login/",
//       data: userAuth,
//     })
//       .then(function (response) {
//         localStorage.setItem("token", `Bearer ${response.data.access}`);
//         localStorage.setItem("username", response.data.username);
//         localStorage.setItem("isAuthenticated", true);
//       })
//       .catch(function (error) {
//         console.log(error, "error - singInorization - INDEX");
//       });
//     this.setState({
//       username: localStorage.username,
//       isAuthenticated: true,
//     });
//     this.UpdateContactList();
//   };
// }

// export default new Services();
