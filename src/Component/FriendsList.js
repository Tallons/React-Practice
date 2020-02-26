import React from 'react'

class FriendsList extends React.Component{
  constructor(){
    super()
    this.state = {
      friends: [
        {
          name: "Lilo",
          img:
            "https://img.favpng.com/2/16/8/lilo-stitch-lilo-pelekai-jumba-jookiba-nani-pelekai-png-favpng-T4cye3xBMk2jt6vzdrTJGbbRM.jpg"
        },
        {
          name: "Nani",
          img:
          "https://vignette.wikia.nocookie.net/disney/images/5/58/Nani_P_Lilo_and_Stitch.jpg/revision/latest/top-crop/width/360/height/450?cb=20160611074647"
        },
        {
           name: "Angel",
           img:
           "https://vignette.wikia.nocookie.net/stitchipediaalilostitch/images/7/7a/624_Angel.png/revision/latest?cb=20181008100431"
        },
      ],
      showFriends: false
      
        // if not an arrow function you must bind
        // this.toggleChange  = this.toggleChange.bind(this)
    }
  }
  toggleChange = () => {
    this.setState({
      showFriends: !this.state.showFriends
  })
}

  render(){
    const friends = this.state.friends.map((element,index) => (
      <div key={index}>
            <img width={"200px"} src={element.img}/>
            <h1>{element.name}</h1>
            
      </div>
    ));
    return(
      <div>
        <h1>My Close friends</h1>
         {!this.state.showFriends ? <button onClick={this.toggleChange}>Show me my friends please!</button> : <div> <button onClick={this.toggleChange}>Hide My Friends</button>
         {friends} </div>}


      </div>
    )
  }
}
  export default FriendsList