(function ($) {
    $.fn.mTab = function (options) {
        var settings = $.extend({
            startTab: 0
        }, options);

        var $tabWrapper = $(this);
        $tabWrapper.tabs = [];

        var $tabControlBar = $('<div class="mTabControlBar"></div>').prependTo($tabWrapper);
        var $tabControlBarList = $('<ul></ul>').prependTo($tabControlBar);

        $tabWrapper.collapseAll = function () {
            $tabWrapper.find('.mTab').hide();
            $tabControlBarList.find('li').removeClass('mTabActive');
        };

        $tabWrapper.activateTab = function (index) {
            $tabWrapper.tabs[index].activateTab();
        };

        $tabWrapper.find('.mTab').each(function (index, element) {
            var $element = $(element);
            var $tab = $('<li><a href="javascript://">' + $element.attr('data-mTabTitle') + '</a></li>').appendTo($tabControlBarList);
            $element.activateTab = function () {
                $tabWrapper.collapseAll();
                $tab.addClass('mTabActive');
                $element.show();
            };

            $tab.find('a').click(function () {
                $element.activateTab();
            });

            if (index == settings.startTab) {
                $element.activateTab();
            }

            $element.tabs[index] = $element;
        });

        return $tabWrapper;
    };
}(jQuery));