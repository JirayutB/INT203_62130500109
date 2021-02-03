const app = {
    data() {
        return {
            firstname: 'Jirayut',
            lastname: 'Jedsadakaroon',
            image: "./images/profile.jpg",
            text: 'LUK -99',
            articles: '5',
            followers: '20',
            rating: '5'
        }
    }
}
var mountedApp = Vue.createApp(app).mount('#app')