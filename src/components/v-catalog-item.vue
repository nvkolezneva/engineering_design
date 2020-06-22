<template>
    <div class="v-catalog-item">


        <v-popup
            v-if="isInfoPopupVisible"
            rightBtnTitle="Add to cart"
            :popupTitle="product_data.name"
            @closePopup="closeInfoPopup"
            @rightBtnAction="addToCart"
        >
            <img class="v-catalog-item_image" v-bind:src=" require('../assets/images/'+ product_data.image )" alt="img">
            <div>
                <p class="v-catalog-item_name">{{product_data.name}}</p>
                <p class="v-catalog-item_price">{{product_data.price | toFix}}</p>
                <p class="v-catalog-item_price">{{product_data.category}}</p>
            </div>

        </v-popup>


        <img class="v-catalog-item_image" v-bind:src=" require('../assets/images/'+ product_data.image )" alt="img">
        <p class="v-catalog-item_name">{{product_data.name}}</p>
        <p class="v-catalog-item_price">{{product_data.price | toFix }}</p>
        <button
                class="v-catalog-item__show-info"
                @click="showPopupInfo"
        >
            Show info
        </button>
        <button
                class="v-catalog-item_add_to_cart btn"
                @click="addToCart"
        >add to cart</button>
    </div>

</template>
<script>
    import vPopup from './v-popup'
    import toFix from "../filters/toFix";
    export default {
        name:'v-catalog-item',
        components:{
            vPopup
        },
        props:{
           product_data:{
               type:Object,
               default(){
                   return{}
               }
           }
        },
        data(){
            return{
                isInfoPopupVisible:false
            }
        },
        filters:{
            toFix
        },
        computed:{},
        methods:{
            showPopupInfo(){
                this.isInfoPopupVisible = true;

            },
            closeInfoPopup(){
                this.isInfoPopupVisible = false;
            },
            addToCart(){
              this.$emit('addToCart',this.product_data)
            }
        },
        watch:{},
        mounted() {
            this.$set(this.product_data, 'quantity',1);
        }
    }

</script>
<style lang="scss">
    .v-catalog-item{
        flex-basis: 25%;
        box-shadow: 0 0 8px 0 #2c3e50;
        padding: 16px;
        margin-bottom: 16px;
    }
    .v-catalog-item_image{
        width: 200px;
    }
</style>