'use strict';

const PlacesIntent = async (result, paramsUser) => {

  let dialogflowResult = {};

  try {
    dialogflowResult.response = 'Testezao places'
  } catch(e) {
    console.log(e);
    dialogflowResult.response = 'Desculpe, não consegui te ajudar agora :( Pode repetir por favor?'
  }
  
  return dialogflowResult;

};

module.exports = PlacesIntent;

