<template>
<div class="markable-textarea">
    <div ref="backdrop" class="backdrop">
        <div ref="highlights" class="highlights" v-html="textWithinMark"></div>
    </div>
    <textarea
        @input="handleInput"
        @scroll="handleScroll"
        ref="input"
        v-model="text"
    />
</div>
</template>

<script>
export default {
    mounted () {
        const ua = window.navigator.userAgent.toLowerCase();
        const isWinPhone = ua.indexOf('windows phone') !== -1;
        const isIOS = !this.isWinPhone && !!ua.match(/ipad|iphone|ipod/);
        if (isIOS) {
            const computedStyle = getComputedStyle(this.$refs.highlights);
            const paddingLeft = parseFloat(computedStyle.paddingLeft) + 3;
            const paddingRight = parseFloat(computedStyle.paddingRight) + 3;
            this.$refs.highlights.style.paddingLeft = paddingLeft + 'px';
            this.$refs.highlights.style.paddingRight = paddingRight + 'px';
        }
        this.isIE = !!ua.match(/msie|trident\/7|edge/);
    },

    data () {
        return {
            isIE: false,
            text: '',
            textWithinMark: '',
        };
    },

    props: {
        markRules: {
            type: Function,
            default: function (text) {
                return text.replace(/\n$/g, '\n\n').replace(/@[\S].*?\b/g, '<mark>$&</mark>');
            },
        },
    },

    methods: {
        handleInput () {
            let markedHTML = this.markRules(this.text);
            if (this.isIE) {
                markedHTML = markedHTML.replace(/ /g, ' <wbr>');
            }

            this.textWithinMark = markedHTML;
        },

        handleScroll () {
            const scrollTop = this.$refs.input.scrollTop;
            const scrollLeft = this.$refs.input.scrollLeft;

            this.$refs.backdrop.scrollTo(scrollLeft, scrollTop);
        },
    },
}
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Open+Sans);

*, *::before, *::after {
  box-sizing: border-box;
}

.markable-textarea,
.markable-textarea .backdrop,
.markable-textarea textarea {
  width: 460px;
  height: 180px;
}

.markable-textarea .highlights,
.markable-textarea textarea {
  padding: 10px;
  font: 20px/28px 'Open Sans', sans-serif;
  letter-spacing: 1px;
}

.markable-textarea {
  display: block;
  margin: 0 auto;
  -webkit-text-size-adjust: none;
}

.markable-textarea .backdrop {
  position: absolute;
  z-index: 1;
  border: 2px solid #685972;
  background-color: #fff;
  overflow: auto;
  pointer-events: none;
}

.markable-textarea .highlights {
    white-space: pre-wrap;
    word-wrap: break-word;
    color: transparent;
}

.markable-textarea textarea {
  display: block;
  position: absolute;
  z-index: 2;
  margin: 0;
  border: 2px solid #74637f;
  border-radius: 0;
  color: #444;
  background-color: transparent;
  overflow: auto;
  resize: none;
}

.markable-textarea mark {
  border-radius: 3px;
  color: transparent;
  background-color: #b1d5e5;
}

.markable-textarea textarea:focus,
.markable-textarea button:focus {
  outline: none;
  box-shadow: 0 0 0 2px #c6aada;
}
</style>
