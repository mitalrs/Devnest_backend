>commad for postgreSQL

      NOTE:-Without semocolen(;)not end commad. not every version case sensitive of postgres.

   $Create table: create table table_name(colom_name primative_type primary key not null, colom_name primative_type not null);
       //PRIMATIVE it's just keyword 
       //if you skip some value then database consider a defaut value.
   $delete table: DROP TABLE company;
   $create schema: create schema schema_name;
      //chema like folder in database
   $crete table in schema: create table schema_name.table_name(colom_name primative_type not null, colom_name primative_type not null//,u add in the colom in this table u need); 
      //"."add a table in a schema
   $delete a table in a schema: drop cascades to table schema_name.table_name  
      //cascades is just a keyword use for give the parmision for delete all data in a schema
   $put a vale in a table: insert into table_name (colom_name,colom_name,colom_name)value(value, value, value);
   $when u don't know table or database exists or no and u need to just drop it: drop database if exists database_name;
     //some as for table 
   $show whol data in table: select * from table_name;
   >you also parform operation like: select(1+1) as addition;
                                     select(1*1) as addition; 
     //addition jus a keyword
     //when you not mantion any keyword then show the defauld string
   $cout data row in table: select count(*) as "records" from table_name;
   $current time: select current_timestamp;
   $select between two value:select * form table_name where value1 and value2;