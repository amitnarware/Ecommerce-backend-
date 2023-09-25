/** 
* @swagger
* /viewalluser:
*  get:
*      summary: To viewalluser user_profile 
*      description: This api is used to check whether api is working or not in (user_profile table)
*      responses:
*          200:
*              description: To test Get method
*/

/**
* @swagger
*  components:
*      schema:
*         admin:
*              type: object
*              properties:
*                        id:
*                          type: integer
*                        mobile:
*                          type: char
*                        email:
*                          type: varchar
*                        photo:
*                          type: varchar
*                        aadhar:
*                          type: char
*                        address:
*                          type: varchar
*                        state:
*                          type: varchar
*                        city:
*                          type: varchar
*                        pin:
*                          type: varchar
*/




/**
* @swagger
* /adduser:
*  post:
*      summary: Used to insert user_profile into mysql database (user_profile table)
*      description: This api is used to insert data into mysql database (user_profile table)
*      requestBody:
*          required: true
*          content:
*              application/json:
*                  schema:
*                      $ref: '#components/schema/admin'
*      responses:
*          200:
*              description: Added successfully
*/


/**
* @swagger
* /updateuser/{id}:
*  put:
*      summary: Used to update data into mysql database (user_profile table)
*      description: This api is used to update data into mysql database (user_profile table)
*      parameters:
*          - in: path
*            name: id
*            required: true
*            description: Numeric id is required
*            schema:
*              type: varchar
*      requestBody:
*          required: true
*          content:
*              application/json:
*                  schema:
*                      $ref: '#components/schema/admin'
*      responses:
*          200:
*              description: updated successfully
*/

/**
* @swagger
* /deleteuser/{id}:
*  delete:
*      summary: Used to delete user_profile data
*      description: This api is used to delete the record from (user_profile table)
*      parameters:
*          - in: path
*            name: id
*            required: true
*            description: Numeric id is required
*            schema:
*              type: varchar
*      responses:
*          200:
*              description: data is deleted successfully
*/ 