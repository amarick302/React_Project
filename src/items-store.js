import { legacy_createStore as createStore } from 'redux';
const initialState={
    items:[
        {
            image:'https://m.media-amazon.com/images/I/61utX8kBDlL._AC_UL480_FMwebp_QL65_.jpg',
            brand:'ASIAN',
            desc:"Men's Wonder-13 Sports Running Shoes",
            id:0,
            price:1200,
            name:'Asian Sports shoe'
        },
        {
            image:'https://m.media-amazon.com/images/I/716PsrIF+gL._AC_UL480_FMwebp_QL65_.jpg',
            brand:'ASIAN',
            desc:"Men's OSCAR-01 Sports Running,Walking,Gym Shoes",
            id:1,
            price:1400,
            name:'Asian Running shoe'
        },
        {
            image:'https://m.media-amazon.com/images/I/61ePa5fEKnL._AC_UL480_FMwebp_QL65_.jpg',
            brand:'Campus',
            desc:"Men's OXYFIT (N) Walking Shoe",
            id:2,
            price:1000,
            name:'Campus Walking Shoe'
        },
        {
            image:'https://m.media-amazon.com/images/I/6138Uxu+hvL._AC_UL480_FMwebp_QL65_.jpg',
            brand:'Campus',
            desc:"Men's Rodeo-2 Running Shoes",
            id:3,
            price:1500,
            name:'Campus Running Shoe'
        },
        {
            image:'https://m.media-amazon.com/images/I/41rQ96NJTlL._AC_UY327_FMwebp_QL65_.jpg',
            brand:'AmazonBasics',
            desc:"564 L Inverter Frost-Free Side-by-Side Refrigerator with Water Dispenser (2022, Auto Defrost, Multi Airflow, Silver Steel)",
            id:4,
            price:40000,
            name:'AmazonBasic 564L Refrigerator'
        },
        {
            image:'https://m.media-amazon.com/images/I/61-Vk77zloL._AC_UY327_FMwebp_QL65_.jpg',
            brand:'Samsung',
            desc:"253 L 3 Star with Inverter Double Door Refrigerator (RT28A3453S8/HL, Elegant Inox)- 2022 Model",
            id:5,
            price:35000,
            name:'Samsung 253L Double Door Refrigerator with Inverter'
        },
        {
            image:'https://m.media-amazon.com/images/I/51GKYnSA3HL._SY500_.jpg',
            brand:'Whirlpool',
            desc:"240 L Frost Free Multi-Door Refrigerator (FP 263D PROTTON ROY, German Steel)",
            id:6,
            price:30000,
            name:'Whirlpool 240L Refrigerator'
        },
        {
            image:'https://m.media-amazon.com/images/I/618ikeOHFaL._AC_UY327_FMwebp_QL65_.jpg',
            brand:'Godrej',
            desc:"185 L 2 Star Direct Cool Single Door Refrigerator (RD EDGE 200B 23 WRF PP BL, Pep Blue, Large Vegetable Tray, 2022 Model)",
            id:7,
            price:35000,
            name:'Godrej 185L Single Door Refrigerator'
        },
        {
            image:'https://m.media-amazon.com/images/I/71L-lTQnJiL._AC_UY327_FMwebp_QL65_.jpg',
            brand:'Redmi',
            desc:"80 cm (32 inches) Android 11 Series HD Ready Smart LED TV | L32M6-RA/L32M7-RA (Black)",
            id:8,
            price:12000,
            name:'Redmi 32 inches Smart Android TV'
        },
        {
            image:'https://m.media-amazon.com/images/I/71d5fMDvq9L._AC_UY327_FMwebp_QL65_.jpg',
            brand:'OnePlus',
            desc:"80 cm (32 inches) Y Series HD Ready LED Smart Android TV 32Y1 (Black)",
            id:9,
            price:19000,
            name:'OnePlus 32 inches Y series Smart Android TV'
        },
        {
            image:'https://m.media-amazon.com/images/I/712am1RDNiL._AC_UY327_FMwebp_QL65_.jpg',
            brand:'Acer',
            desc:"80 cm (32 inches) I Series HD Ready Android Smart LED TV AR32AR2841HDFL (Black)",
            id:10,
            price:15000,
            name:'Acer 32 inches I Series Android Smart TV'
        },
        {
            image:'https://m.media-amazon.com/images/I/71eUw15rVbL._AC_UY327_FMwebp_QL65_.jpg',
            brand:'Samsung',
            desc:"108 cm (43 inches) Crystal 4K Series Ultra HD Smart LED TV UA43AUE60AKLXL (Black)",
            id:11,
            price:20000,
            name:'Samsung 43 inches 4k Smart TV'
        }
    ]
    
}
function itemsReducer(state=initialState,action){
    
    switch(action.type){
        case "HIGH_TO_LOW":
            const copyItems1=state.items
            copyItems1.sort((obj1,obj2)=>{
                if(obj1.price>obj2.price){
                    return -1;
                }
                else if(obj1.price<obj2.price){
                    return 1;
                }
                else{
                    return 0;
                }
            })
            return {...state,items:[...copyItems1]}
        case "LOW_TO_HIGH":
            const copyItems2=state.items;
            copyItems2.sort((obj1,obj2)=>{
                if(obj1.price<obj2.price){
                    return -1;
                }
                else if(obj1.price>obj2.price){
                    return 1;
                }
                else{
                    return 0;
                }
            })
            return {...state,items:[...copyItems2]}

        default: return state;
    }
}
export default createStore(itemsReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());