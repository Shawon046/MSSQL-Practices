CREATE PROCEDURE dbo.InsertUser
	   @user_name                    NVARCHAR(50)  = NULL   , 
       @user_email                   NVARCHAR(50)  = NULL   ,
	   @user_country                 NCHAR(20)  = NULL   , 
	   @user_phone                   NCHAR(20)  = NULL   , 
	   @user_password                NCHAR(100)  = NULL  
AS 
BEGIN 
     SET NOCOUNT ON 

     INSERT INTO dbo.USERS
          (                    
            user_name                   ,
            user_email                  ,
            user_country                ,
            user_phone					,
			user_password
          ) 
     VALUES 
          ( 
            @user_name                  ,
            @user_email                 ,
            @user_country               ,
            @user_phone                 ,
			@user_password
          ) 

END 

GO