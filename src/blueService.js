//import the axios HTTP client to communicate with the API
import axios from 'axios';

class BlueService {

    constructor(
        url = 'https://socialapp-api.herokuapp.com/',
        client = axios.create()
    ) {
        this.url = url;
        this.client = client;
        this.config = {}
    }

    // exaples of posting

    // var config = {
    //     headers: {'Authorization': "bearer " + token}
    // };
    // var bodyParameters = {
    //    key: "value"
    // }
    // Axios.post( 
    //   'http://localhost:8000/api/v1/get_token_payloads',
    //   bodyParameters,
    //   config
    // ).then((response) => {
    //   console.log(response)
    // }).catch((error) => {
    //   console.log(error)
    // });

    // getMessage() {
    //     return this.client.get(this.url + 'messages/15');
    // }

    gitMessageSpecific(messageID) {
        return this.client.get(this.url + 'messages/' + messageID);
    }

    getUsers(){
        return this.client.get(this.url + "users");
    }


    getUserName(username) {
        return this.client.get(this.url + "users/" + username);
    }

    getMultipleMessages() {
        return this.client.get(this.url + "messages");
    }

    postMessage(text) {

        let tempLoginInfo = JSON.parse(localStorage.getItem("login"));

        var config = {
            headers: { 'Authorization': "bearer " + tempLoginInfo.result.token }
        };

        var bodyParameters = {
            "text": text
        }

        return this.client.post(this.url + "messages", bodyParameters, config)
    }

    postLike(messageID) {
        // console.log(messageID)
        let tempLoginInfo = JSON.parse(localStorage.getItem("login"));

        var config = {
            headers: { 'Authorization': "bearer " + tempLoginInfo.result.token }
        };

        var bodyParameters = {
            "messageId": messageID
        }

        return this.client.post(this.url + "likes", bodyParameters, config)
    }

    deleteLike(likeID){
        let tempLoginInfo = JSON.parse(localStorage.getItem("login"));
    
        var config = {
            headers: { 'Authorization': "bearer " + tempLoginInfo.result.token }
        }
    // console.log(username)
        //  var bodyParameters = {
        //     "messageID": messageID
        //  }
         return this.client.delete(this.url + "likes/" + likeID,  config)
     }

    postNewUser(username, displayName, password) {
        var bodyParameters = {
            "username": username,
            "displayName": displayName,
            "password": password
        }
        return this.client.post(this.url + "users", bodyParameters)
    }

    deleteUser(username, token) {

        var config = {
            headers: { 'Authorization': "bearer " + token }
        }
        console.log(username)
        //  var bodyParameters = {
        //     "username": username
        //  }
        return this.client.delete(this.url + "users/" + username, config)
    }

    // deleteMessage(messageId) {

    //     let tempLoginInfo = JSON.parse(localStorage.getItem("login"));

    //     var config = {
    //         headers: { 'Authorization': "bearer " + tempLoginInfo.result.token }
    //     };

    //     // var bodyParameters = {
    //     //     "messageId": messageId
    //     // }

    //     return this.client.delete(this.url + "messages/" + messageId, config)
    // }

    updateUser(about, displayName, password) {
        let tempLoginInfo = JSON.parse(localStorage.getItem("login"));

        var config = {
            headers: { 'Authorization': "bearer " + tempLoginInfo.result.token }
        };
        var bodyParameters = {
            "about": about,
            "displayName": displayName,
            "password": password
        }
        return this.client.patch(this.url + "users/" + tempLoginInfo.result.username, bodyParameters, config)
    }

    

}
export default BlueService;