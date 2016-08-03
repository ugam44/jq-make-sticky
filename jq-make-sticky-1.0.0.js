jQuery.fn.extend({
    makeSticky: function(options) {
        options = options || {};
        var $ = jQuery;
        var items = this.map(function(index, element) {
            return $(element);
        });
        var setOptions = function(params) {
            var opts = params.options,
                item = params.item,
                topOffset = params.topOffset;

            var left = (opts.left || "0px").toString();
            if (left.indexOf("vw") === -1 &&
                left.indexOf("px") === -1 &&
                left.indexOf("%") === -1) {
                left = left + "px";
            }

            var right = (opts.right || "0px").toString();
            if (right.indexOf("vw") === -1 &&
                right.indexOf("px") === -1 &&
                right.indexOf("%") === -1) {
                right = right + "px";
            }

            var width;
            if (opts.width !== undefined) {
                switch (opts.width) {
                    case "match":
                        {
                            width = item.width() + "px";
                            break;
                        }
                    default:
                        {
                            width = opts.width.toString();
                        }
                }
            } else {
                width = "Calc(100% - 20px)";
            }

            if (width.indexOf("%") === -1 &&
                width.indexOf("px") === -1 &&
                width.indexOf("vw") === -1) {
                width = width + "%";
            }

            var margin = (opts.margin || "0 auto").toString();

            var $clone = item.clone()
                .addClass("sticky")
                .addClass("sticky-clone")
                .css("top", topOffset + "px")
                .css("width", width)
                .css("margin", margin);


            if (opts.left !== undefined &&
                opts.right === undefined) {
                $clone.css("left", left);
            } else if (opts.left === undefined &&
                opts.right !== undefined) {
                $clone.css("right", right);
            } else {
                $clone.css("left", left)
                    .css("right", right);
            }

            return $clone;
        };
        var getHeight = function ($element) {
            var total = 0;

            total += $element.height();
            total += Number($element.css("padding-top").replace("px", ""));
            total += Number($element.css("padding-bottom").replace("px", ""));
            total += Number($element.css("border-bottom").split("px")[0]);

            return total;
        };

        var updateSticky = function($items, event) {
            $items.each(function(index, item) {
                $itemOffset = item.offset().top;
                var topOffset = 0;

                $(".sticky").each(function(index, element) {
                    topOffset += getHeight($(this));
                });

                var scrollTop = $(window).scrollTop() + topOffset;
                var $clone;

                if (scrollTop > $itemOffset && $itemOffset > 0) {

                    if (!item.prev(".sticky-clone").length) {
                        $clone = setOptions({options: options, item: item, topOffset: topOffset});

                        $clone.insertBefore(item);
                        item.css("visibility", "hidden")
                            .css("opacity", "0");
                    }
                } else {
                    item.prev(".sticky-clone").remove();
                    item.css("visibility", "visible")
                        .css("opacity", "1");
                }
            });
        }

        $(window).on("scroll.sticky resize.sticky", function(event) {
            updateSticky(items, event);
        });

        return this;
    }
});
