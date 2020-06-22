<template>
    <div class="v-cart-item">
        <img  class="v-cart-item__image" v-bind:src=" require('../assets/images/'+ cart_item_data.image )" alt="img">
        <div class="v-catr-item_info">
        <p>{{cart_item_data.name}}</p>
        <p>{{cart_item_data.price | toFix}}</p>
        <p>{{cart_item_data.article}}</p></div>
        <div class="v-catr-item_quantity">
        <span>
            <span class="quantity__btn" @click="decrementItem">-</span>
            {{cart_item_data.quantity}}
            <span class="quantity__btn" @click="incrementItem">+</span>
        </span>
        </div>
            <button @click="deleteFromCart">Delete</button>

    </div>
</template>

<script>
    import toFix from "../filters/toFix";
    export default {
        name: "v-cart-item",
        props:{
            cart_item_data:{
               type:Object,
                default(){
                   return {}
                }
            }
        },
        filters:{
            toFix
        },
        methods:{
            decrementItem(){
        this.$emit('decrement')
            },
            incrementItem(){
                this.$emit('increment')

            },

            deleteFromCart(){
                this.$emit('deleteFromCart')
            }
        },
        mounted() {

        }
    }
</script>

<style lang="scss">
    .v-cart-item{
       display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0 0 8px 0 #2c3e50;
        padding: 16px;
        margin-bottom: 16px;
        &__image{
            max-width: 70px;
        }
        .quantity__btn{
            cursor: pointer;
        }
    }

</style>