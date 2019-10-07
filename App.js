import React, { Component } from 'react';
import { StyleSheet, View  ,TextInput ,ScrollView,FlatList ,Alert,StatusBar} from 'react-native';
import {Button, Icon,Container,Header,Left,Body,Right,Title,Content,Footer,FooterTab,Item,Badge, Input,Card,CardItem,Text,Textarea,Form,List,ListItem,SwipeRow} from 'native-base';
import Swipeout from 'react-native-swipeout';
import firebase from 'firebase';








var firebaseConfig = {
  apiKey: "AIzaSyCihLKk1w9H6dtpSf7KvRhKVAc6VvOARgs",
  authDomain: "fir-expdb.firebaseapp.com",
  databaseURL: "https://fir-expdb.firebaseio.com",
  projectId: "fir-expdb",
  storageBucket: "",
  messagingSenderId: "56787464528",
  appId: "1:56787464528:web:a78d9d76676a9157"
};
firebase.initializeApp(firebaseConfig);


export default class App extends Component<{}>  {

  constructor(props){
    super(props);

    var database = firebase.database();
     this.ref=database.ref('users');
    
  
    this.saveNote= this.saveNote.bind(this);

    this.state={
      note:'',
      data_list:[],
      pKey:null,
      activeRowKey:null,
      ad:null
    }
 
   
  }

  
  componentDidMount(){

   
    this.ref.on('value',snapShot=>{
    if(snapShot.val()){
     let dataList=Object.values(snapShot.val());
     this.setState({
      data_list:dataList,
          
        });
      }
    });

   
}




  saveNote(){
    var month = new Date().getMonth()+1;
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds
  
    var data = {
      uid:firebase.database().ref('/users/').push().getKey(),
      noteHeader:'hello',
      noteName:this.state.note,
      saveDateTime: hours + ':' + min + ':' + sec + ' ' +  month + '/' + year ,
     
    }
    newPostRef = firebase.database().ref('/users/'+data.uid).set(data)
    dizi = [data.uid]
  
    this.setState({note:''})

    
  }

  deleteItem = (uid) => {

    firebase.database().ref('users/'+uid).set(null)
 
 }

render(){
  
  return (
    <Container style={styles.container3}>
      <Header style={styles.Header}>
          <Left>
            <Button >
              <Icon name='menu' />
            </Button>
          </Left> 
         
          <Body>
           
          </Body>
          <Right />
        </Header>
       
        <Content>
        
        
        <Form>
                <Textarea rowSpan={5} value={this.state.note} onChangeText={(v)=> this.setState({note:v})} placeholder={'Enter your note.'} />
                <Button  onPress={(event) => this.saveNote()}>
                    <Icon name='save'/>
                  </Button>
         </Form>
                  
           <View style={{height:3,width:'100%',backgroundColor:'red'}}/>
          <Item style={{position: 'relative'}} >
              <FlatList
                    data={this.state.data_list}
                    keyExtractor={(item)=>item.uid}
                    renderItem={({item})=>(
                      
                  <Swipeout>

                    <Card>
                        <CardItem header bordered>
                        <Text style={{fontSize:20,textAlign:'center'}}>{item.noteHeader}</Text> 
                        </CardItem>
                        <CardItem bordered>
                          <Body>
                          <Text style={{fontSize:35,textAlign:'left'}}>{item.noteName}</Text>
                          </Body>
                        </CardItem>
                        <CardItem footer bordered>
                        <Text style={{fontSize:15,textAlign:'right'}}>{item.saveDateTime}</Text> 
                        </CardItem>
                        <Button danger style={styles.saveButton} onPress={() =>
                        Alert.alert(
                          'Uyarı!',
                          'Bu Notu Silmek istediğinize emin misiniz?',
                          [
                            {
                              text: 'Vazgeç',
                              onPress: () => console.log('Cancel Pressed'),
                              style: 'cancel',
                            },
                            {text: 'Sil', onPress: () => this.deleteItem(item.uid)},
                          ],
                          {cancelable: false},
                        )}>
                          <Icon name='trash'/>
                      </Button>
                     
                    </Card>
                    <View style={{height:3,width:'100%',backgroundColor:'green'}}/>           
                    
                  </Swipeout>

                  )}
                  
                />
             </Item>
             
        </Content>

        
    
   
    </Container>
  );
}
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  Header: {
    marginTop:StatusBar.currentHeight,
  },
  container3: {
    flex:1,
   
  },
  saveButton: {
    position: 'absolute',
    right:0,
   

   
  },
});
