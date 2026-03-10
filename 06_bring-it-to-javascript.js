

let userid=[];
userid[0]={
    username:'AWAKE1223',password:'*******',
    name:'A',
    surname:'Wake',
    dateofbirth:new Date('2000/12/23'),
    role:'USER'
    }
userid[1]={
    username:'BY01208',password:'112223333',
    name:'B',
    surname:'Yonse',
    dateofbirth:new Date('2003/08/12'),
    role:'USER'
    }
userid[2]={
    username:'CPP01',password:'C@JS123',
    name:'C',
    surname:'Plusplus',
    dateofbirth:new Date('1990/09/01'),
    role:'USER'
    }
userid[3]={
    username:'CoffeeeA1',password:'3Cup@day',
    name:'Add',
    surname:'icted',
    dateofbirth:new Date('1983/10/10'),
    role:'ADMIN'
    }
        console.log("This is entity of USER");

        for(let i=0;i<userid.length;i++)
            {
    console.log(userid[i])
}


/*ProductName part*/
let product=[];
    product[0]={
        CoffeeID:1,
        Name:'ethiopia',
        Description:'arbica with grate favor'
    }



    /*Flavor part*/
    function addFlavor(flavorname,flavorlevel){
        let flavor={
            name:flavorname,
            level:flavorlevel
        }
        return flavor;
    }
    let flavor=[];
    flavor.push(addFlavor('fruity',3));
    flavor.push(addFlavor('Nutty',2));

    let roastType=['light','meduim','dark'];

    let addSupplier=(id,name,description)=>{
        let supplier={
            supplierid:id,
            suppliername:name,
            supplierdes:description
        }
        return supplier;
    }



    /*Supplier part */
     let supplier=[];
     supplier.push(addSupplier(1,'Weroast','Roast all coffee bean light meduim dark'));

    let addProductDetail=(Flvornname,CoffeeID,RoastID,Supplier)=>
    {
        let ProductDetail={
            flavor:Flvornname,
            CoffeeID:CoffeeID,
            RoastID:RoastID,
            Supplier:Supplier
        }
        return ProductDetail;
    }
    console.log("This is Entity of Supplier")
    console.log(supplier[0]);


    
    /*productDetail part */
    let ProductDetail=[]

    ProductDetail=[];
    ProductDetail.push(addProductDetail(flavor[0],product[0],roastType[0],supplier[0]))


        console.log("This is Entity of ProductDetail")

    console.log(ProductDetail[0]);

    /*Postman part*/
    let Postman=['Kerry','Flash','JST','ThaiPost']
            console.log("This is Entity of Postman")
            console.log(Postman);


    /*Address Part */
    let addAddress=(HomeAddress,Province,District,PostalCode,username)=>{
       let Address={
            HomeAddress:HomeAddress,
            Province:Province,
            District:District,
            PostalCode:PostalCode,
            username:username
        } 
        return Address;

    }
    let Address=[];
            Address.push(addAddress('5 moo 3','nakonpathom','thambluang',73000,userid[0].username));
            console.log("This is Entity of Address")
            console.log(Address[0]);    

/*Order part */

        let addOrder=(username,address,CoffeeID,dateoforder,status)=>{
            let Order={
                username:username,
                address:address,
                CoffeeID:CoffeeID,
                dateoforder:dateoforder,
                status:status
            }
        return Order
        }
        let Order=[];
        Order.push(addOrder(userid[0].username,Address[0],product[0].CoffeeID,new Date("2026-3-10","ship"),'ship'));
        console.log("This is Entity of Order")
            console.log(Order[0]);