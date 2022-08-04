
export let ProjectState = {
    initialstate:{
      currentCords: '',
      renderType: false
    },
    
    stateUpdater(){

    },
    eventHandler(props){
        
        this.stateUpdater = props; 
    },
    cords: '',
    renderType: true
    
}


export let renderSwitcher = () => {
    if (ProjectState.initialstate.renderType === true) {
      ProjectState.initialstate.renderType = false;
      ProjectState.stateUpdater(ProjectState.initialstate) 
    } else {
      ProjectState.initialstate.renderType = true;
      ProjectState.stateUpdater(ProjectState.initialstate) 
    }
}



function coordsPrepare (argu){
  argu = argu.toString();
  let arguTransformArray = [];
  for(let i=0; i<argu.length; i++){
    arguTransformArray.push(argu[i])
  }
 
  let dotIndex = arguTransformArray.indexOf('.')
  console.log(dotIndex); 
  arguTransformArray.length = 9;
  
  return arguTransformArray.join('');
}

function dataFetcher (cords) {
  fetch(`https://api.openweathermap.org/data/2.5/onecall?${cords}&exclude=minutely&appid=17a2a05179606595e90bf4a02fd2ce0a`)
    .then(function(rspns){return rspns.json()})
    .then(function(data){
     console.log(data); 
     ProjectState.initialstate[cords] = data;
     ProjectState.initialstate.currentCords = cords;
     ProjectState.stateUpdater(ProjectState.initialstate);
    })
}

function getUserCoords (){
  navigator.geolocation.getCurrentPosition(position => {
    let latitude = coordsPrepare(position.coords.latitude);
    let longitude = coordsPrepare(position.coords.longitude);
  
    ProjectState.cords = `lat=${latitude}&lon=${longitude}`
    console.log(ProjectState.cords);
    ProjectState[`lat=${latitude}&lon=${longitude}`] = 
    dataFetcher(ProjectState.cords)

   })
}
getUserCoords();




