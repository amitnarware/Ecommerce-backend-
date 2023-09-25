let express = require('express');
let cors = require ('cors');
const Joi = require('joi');

let app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(cors());
const port = 5000;
const swaggerui = require('swagger-ui-express')
const swaggerJSDoc =  require('swagger-jsdoc');
const nodemailer = require('nodemailer');
             //  JOI
function validateUser(user)
{
    const JoiSchema = Joi.object({
      
        id: Joi.string()
                  .min(2)
                  .max(30)
                  .required(),
                    
        name: Joi.string()
               .min(5)
               .max(50)
               .optional(), 
                 
        password: Joi.string()
                       .optional(),
                         
        status: Joi.string()
                        .valid('activated')
                        .valid('unactivated')
                        .optional(),
        createdob: Joi.string()
                        .valid('default')
                        .valid('')
                        .optional(),
    }).options({ abortEarly: false });
  
    return JoiSchema.validate(user)
}
  
const user = {
    id: '22',
    name: 'Archana',
    password: 'A234@123',
    status: 'activated',
    createdob:""
}
  
response = validateUser(user)
  
if(response.error)
{  
    console.log(response.error.details)
}
else
{
    console.log("Validated Data")
}

/*const admin = require('firebase-admin');
const credentials = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(credentials),
});`

app.post('./signup', async(req, res)=>{
  const user = {
    email:req.body.email,
    password:req.body.passowrd
  }
  const userResponse = await admin.auth().createUser({
    email: user.body.email,
    password:user.body.password,
    emailVerified:false,
    disabled:false
  });
  res.json(userResponse);
}) */

            // FIRE BASE AUTH
   

            



                      //NODEMAILER SERVICE
/*const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // Set to true if using a secure connection (TLS/STARTTLS)
    auth: {
      user: 'amitnarware40@gmail.com',
      pass: 'nxnevipdoaqvbhxi'
    }
  });
  const mailOptions = {
    from: 'your-email@example.com',
    to: 'amitnarware40@gmail.com',
    subject: 'Hello from Node.js',
    text: 'only for testing purpose.'
  };
  
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error occurred while sending email:', error.message);
    } else {
      console.log('Email sent successfully!', info.response);
    }
  });*/
    


                        // SWAGGER API DOCUMENTATION
const option = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: "API documentation by Amit",
            version: "1.0.0"
        },
        servers: [
            {
                url:"http://localhost:5000"
            }
        ]
    },
    apis: ['./index.js']
}

const swaggerSpec = swaggerJSDoc(option)
app.use('/api-docs', swaggerui.serve, swaggerui.setup(swaggerSpec))

                   // POSTMAN API ROUTE
const {usersRouter} = require('./routes/usersRoute');
app.use('/api',usersRouter)

const {user_profileRouter} = require('./routes/user_profileRoute');
app.use('/api', user_profileRouter)

const {roleRouter} = require('./routes/roleRoute');
app.use('/api', roleRouter)

const {role_assignRouter} = require('./routes/role_assignRoute');
app.use('/api', role_assignRouter)


const {sub_categoryRouter} = require('./routes/sub_categoryRoute');
app.use('/api', sub_categoryRouter)

const {offersRouter} = require('./routes/offersRoute');
app.use('/api', offersRouter)

const {discountRouter} = require('./routes/discountRoute');
app.use('/api', discountRouter)

const {customerRouter} = require('./routes/customerRoute');
app.use('/api', customerRouter)

const {categoryRouter} = require('./routes/categoryRoute');
app.use('/api', categoryRouter)

const {productRouter} = require('./routes/productRoute');
app.use('/api', productRouter)

const {product_descriptionRouter} = require('./routes/product_descriptionRoute');
app.use('/api', product_descriptionRouter)

const {retailersRouter} = require('./routes/retailersRoute');
app.use('/api', retailersRouter)

                  // SWAGGER API OF ALL TABLES
  
/**
 * @swagger
 * /api/viewuser:
 *  get:
 *      summary: Retrive information about users from the database 
 *      description: This api is used to Retrive all the information about users. 
 *      responses:
 *          200:
 *              description: To test Get method
 */

/** 
* @swagger
* /api/viewalluser:
*  get:
*      summary: To view all the information about user profile information
*      description: This api is Retrive all the information about user profile  information 
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
 *                        name:
 *                          type: varchar
 *                        password:
 *                          type: varchar
 *                        status:
 *                          type: varchar
 *                        createdob:
 *                          type: date
 */

/**
 * @swagger
 * /api/addusers:
 *  post:
 *      summary: Used to update new users information
 *      description: This api is used to insert data into mysql database (users table)
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
 * /api/updateusers/{id}:
 *  put:
 *      summary: For Fetch users information using ID
 *      description: This api is used to update data into mysql database (users table)
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            description: Numeric id is required
 *            schema:
 *              type: integer
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
 * /api/deleteusers/{id}:
 *  delete:
 *      summary: For delete users who is not active in last six months. 
 *      description: This api is used to delete the record from (users table)
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            description: Numeric id is required
 *            schema:
 *              type: integer
 *      responses:
 *          200:
 *              description: data is deleted successfully
 */ 

                 /*  user_profile api documentation */

/** 
* @swagger
* /api/viewalluser:
*  get:
*      summary: all the information about user profile 
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
* /api/adduser1:
*  post:
*      summary: Add new users in databases
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
* /api/updateuser/{category_id}:
*  put:
*      summary: Fetch information about user profile with the help of category_id
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
* /api/deleteuser/{category_id}:
*  delete:
*      summary: delete user_profile data 
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

                 // sub_category api documentation //

/** 
* @swagger
* /api/viewalluser1:
*  get:
*      summary: To fetch data about role sub category
*      description: This api is used to check whether api is working or not in (sub_category table)
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
*                     category_id:
*                           type: varchar
*                     sub_category_id:
*                           type: varchar
*                     subcategory_name:
*                           type: varchar
*                     subcategory_image:
*                           type: varchar
*                        
*/




/**
* @swagger
* /api/adduser1:
*  post:
*      summary: Add data in new role sub category
*      description: This api is used to insert data into mysql database (sub_category table)
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
* /api/updateuser1/{category_id}:
*  put:
*      summary: see data about role sub category
*      description: This api is used to update data into mysql database (sub_category table)
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
* /api/deleteuser1/{category_id}:
*  delete:
*      summary: delete data role sub category which not in use
*      description: This api is used to delete the record from (sub_category table)
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

              // role assign api documentation//
/** 
* @swagger
* /api/viewalluser2:
*  get:
*      summary: To view role_assign data
*      description: This api is used to check whether api is working or not in (role_assign table)
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
*                     id:
*                      type: varchar
*                     role_id:
*                      type: varchar
*                     assign_on:
*                      type: varchar                    
*/




/**
* @swagger
* /api/adduser2:
*  post:
*      summary: add role assign data values
*      description: This api is used to insert data into mysql database (role_assign table)
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
* /api/updateuser2/{role_id}:
*  put:
*      summary: update data in role assign with new role id 
*      description: This api is used to update data into mysql database (role_assign table)
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
* /api/deleteuser2/{role_id}:
*  delete:
*      summary: delete role assign data
*      description: This api is used to delete the record from (role_assign table)
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

           //  ROLE API documentation


/** 
* @swagger
* /api/viewalluser3:
*  get:
*      summary: get admin role data 
*      description: This api is used to check whether api is working or not in (role table)
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
*                     role_id:
*                        type: varchar
*                     role_name:
*                        type: char
*                       
*/




/**
* @swagger
* /adduser3:
*  post:
*      summary: Add admin new role information
*      description: This api is used to insert data into mysql database (role table)
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
* /api/updateuser3/{role_id}:
*  put:
*      summary: change data in admin role with help of role id
*      description: This api is used to update data into mysql database (role table)
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
* /api/deleteuser/{role_id}:
*  delete:
*      summary: delete admin role which not in work
*      description: This api is used to delete the record from (role table)
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
app.listen(5000, function () {
    console.log("server is running on 5000 port....")
})

    
