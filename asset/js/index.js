// categories item toggle js
$(".cat-item-box").hide();

$(document).ready(function () {
    $(".menu-box").on("click", function() {
        $(".cat-item-box").toggle("slow");
    })
    
    // product details page js
    $(".scroll-down-arrow").on("click", function() {
        $(".product-img-scroller").toggleClass("height");
        $(".scroll-down-arrow").toggleClass("rotate");
    })    
});

// for update product qty
function productQty(type) {    
    let inp = $("#product_qty").val();

    if (type == 'inc') {
        inp++;
    } else {
        if (inp <= 1) {
            inp = 1;
        } else {
            inp--;
        }
    }
    $("#product_qty").val(inp);
}    

// tab in product detail page
$(".product-details-content .product-details").show();
$(".product-details-content .about-brand").hide();
$(".product-details-content .product-faq").hide();

function showTab(type, self) {
    switch (type) {
        case 'details':
                $(".product-details-content .product-details").show();
                $(".product-details-content .about-brand").hide();
                $(".product-details-content .product-faq").hide();
                
                $(".product-tab-panel").addClass('text-muted');
                $(".product-tab-panel").removeClass('border-dark');
                $(self).addClass('border-dark');
                $(self).removeClass('text-muted');
            break;

        case 'brand':
                $(".product-details-content .product-details").hide();
                $(".product-details-content .about-brand").show();
                $(".product-details-content .product-faq").hide();

                $(".product-tab-panel").addClass('text-muted');
                $(".product-tab-panel").removeClass('border-dark');
                $(self).addClass('border-dark');
                $(self).removeClass('text-muted');
            break;

        case 'faq':
                $(".product-details-content .product-details").hide();
                $(".product-details-content .about-brand").hide();
                $(".product-details-content .product-faq").show();

                $(".product-tab-panel").addClass('text-muted');
                $(".product-tab-panel").removeClass('border-dark');
                $(self).addClass('border-dark');
                $(self).removeClass('text-muted');
            break;
    
        default:
                $(".product-details-content .product-details").show();
                $(".product-details-content .about-brand").hide();
                $(".product-details-content .product-faq").hide();

                $(".product-tab-panel").addClass('text-muted');
                $(".product-tab-panel").removeClass('border-dark');
                $(self).addClass('border-dark');
                $(self).removeClass('text-muted');
            break;
    }
}
