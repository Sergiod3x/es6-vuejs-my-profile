Vue.config.devtools = true;

new Vue(
    {
        el: '#profile-page',
        data: {
            myProfile: {
                details: {
                    name: 'Pierfilippo',
                    surname: 'Baudo',
                    pic: 'https://www.focus.it/site_stored/imgs/0003/042/nerd2.1020x680.jpg',
                },
                posts: [
                    {
                        text: "C'è nessuno?",
                        mediaPath: 'https://acqualete.it/wp-content/uploads/2015/09/La-Particella-di-Sodio-1.jpg',
                        date: '26-05-2021'
                    }, {
                        text: "Vi ricordate di Windows XP? Che ricordi, non ce la faccio...",
                        mediaPath: 'https://upload.wikimedia.org/wikipedia/it/d/d3/Colline_%28immagine%29.jpg',
                        date: '01-06-2021'
                    }, {
                        text: "Mi sono iscritto in palestra!",
                        date: '16-06-2021'
                    },
                    {
                        text: 'Vi presento il mio amico Mimmo',
                        mediaPath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Supernerd_%283262512306%29.jpg/1024px-Supernerd_%283262512306%29.jpg',
                        date: '17-06-2021'
                    }
                ]
            },
           postText : "",

        },
        methods:{
            // autofocus : function(){
            //     const element = document.getElementById("newTaskElement");
            //     element.focus();
            // },
            // addTask: function(){
            //     this.todoList.push(this.newTask);
            //     this.newTask="";
            // },
            // deleteTask: function(index){
            //     console.log(index);
            //     this.todoList.splice(index,1);
               
            // },
            // returnImg : function(index){
            //     return ("./img/avatar" +this.contacts[index].avatar + ".jpg");

            // },
            // sentOrReceived : function(index) {
            //     return ("message" + " " + this.contacts[1].messages[index].status);
            
                
            // },
            // updateIndex : function(index){
            //     this.contactIndex = index;
            // },
            getCurrentDateTime: function() {
                const dateTimeNow = dayjs();
                return dateTimeNow.format("DD/MM/YYYY HH:mm:ss");

            },
            newPost: function(){
                this.myProfile.posts.push({
                    date : this.getCurrentDateTime(),  
                    text : this.postText,
                   
                });
                this.postText = "";

            },

     

            removePost: function(index){
                console.log(index);
                
                this.myProfile.posts.splice(index,1);
                 
            },
            



    }
    }
);