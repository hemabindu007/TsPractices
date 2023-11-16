const swaggerDefinition = {
    info: {
      title: 'MongoDB API',
      version: '1.0.0',
      description: 'API for MongoDB operations',
    },
   
    servers:
      {
          url:'http://localhost:3300',
      }
    ,
   
    paths : {
   
      //user / method
      '/user':{
        get : {
          tags:[{user:''}],
          summary : 'get a list of users',
          responses : {
            200:{
              description:'Succesful response',
            },
          },
        },
      },
  
  //user get data
  
     '/user/getAll':{
      get : {
        tags:[{user:''}],
        summary : 'get data from mdb',
        responses : {
          200:{
            description:'Succesful response',
          },
        },
      },
    },
    //get Data By Id
  
    '/user/getById/{id}':{
        get :{
          tags:[{user:''}],
          summary :'Get Data By Id',
          parameters : [
            {
              name :'id',
              in :'path',
              required :true,
              description : 'ID of the user to update',
            },
          ],
          responses : {
            200 : {
              description :' user getting succesfully',
            },
            400 : {
              description : 'user not found ',
            },
          },
        },
    },
     //user add data
     '/user/postData':{
      post :{
        tags:[{user:''}],
        summary :'add a new user ',
        parameters : [
          {
            name : 'user',
            in: 'body',
            type:'object',
            required : true,
          },
        ],
        responses : {
          200 : {
            description :' user Updated succesfully',
          },
          400 : {
            description : 'user not found ',
          },
        },
      },
  },
      //user update data
      '/user/update/{id}':{
        put :{
          tags:[{user:''}],
          summary :'update a user name and mail',
          parameters : [
            {
              name :'id',
              in :'path',
              required :true,
              description : 'ID of the user to update',
            },
            {
              name : 'user',
              in: 'body',
              type:'object',
              required : true,
            },
          ],
          responses : {
            200 : {
              description :' user Updated succesfully',
            },
            400 : {
              description : 'user not found ',
            },
          },
        },
    },
   
  // user delete
  '/user/delete/{id}': {
    delete: {
      tags:[{user:''}],
      summary: 'Delete a user',
      parameters: [
        {
          name: 'id',
          in: 'path',
          required: true,
          schema: {
            type: 'object',
          },
        },
      ],
      responses: {
        200: {
          description: 'User deleted successfully',
        },
        404: {
          description: 'User not found',
        },
      },
    },
   },
  
  
  
  
    }
}
export default   swaggerDefinition;
  