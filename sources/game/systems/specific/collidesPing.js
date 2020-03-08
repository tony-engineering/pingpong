import {Forces} from 'components/common/forces.js';

function collidesPing(entities) {
    Object.entries(entities).forEach(([name, entity]) => {

    var positionComponent = entity.get('position');
    var hitboxComponent =entity.get('hitbox');
    var forcesComponent =entity.get('forces');
    var zoneComponent =entity.get('zone');

    if(positionComponent.y<0){
      positionComponent.y=0;
      entity.remove('forces');
    }else if(positionComponent.y+hitboxComponent.height>zoneComponent.frame[0].height){
      positionComponent.y=zoneComponent.frame[0].height-hitboxComponent.height;
      entity.remove('forces');
    }
  });
}

export {collidesPing};
