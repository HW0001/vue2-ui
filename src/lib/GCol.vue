<template>
  <div class="g-col" :class="colClass" :style="colStyle">
    <slot />
  </div>
</template>
<script>
export default {
  name: "GCol",
  props: {
    span: [Number, String],
    offset: [Number, String],
    sm: { type: Object },
    md: { type: Object },
    lg: { type: Object },
    xl: { type: Object },
    xxl: { type: Object },
  },
  data() {
    return {
      gutter: 0,
    };
  },
  computed: {
    colClass() {
      const { span, offset, xs, sm, md, lg, xl, xxl } = this;
      return [
        span && `span_${span}`,
        offset && `offset_${offset}`,
        sm && sm.span && "col_sm_" + sm.span,
        sm && sm.offset && "col_sm_offset_" + sm.span,
        md && md.span && "col_md_" + md.span,
        md && md.offset && "col_md_offset_" + md.span,
        lg && lg.span && "col_lg_" + lg.span,
        lg && lg.offset && "col_lg_offset_" + lg.span,
        xl && xl.span && "col_xl_" + xl.span,
        xl && xl.offset && "col_xl_offset_" + xl.span,
        xxl && xxl.span && "col_xxl_" + xxl.span,
        xxl && xxl.offset && "col_xxl_offset_" + xxl.span,
      ];
    },
    colStyle() {
      const { gutter } = this;
      return {
        paddingLeft: gutter / 2 + "px",
        paddingRight: gutter / 2 + "px",
      };
    },
  },
};
</script>
<style lang="scss" scoped>
$class-prefix: span_;
@for $n from 1 through 24 {
  .#{$class-prefix}#{$n} {
    width: ($n/24) * 100%;
  }
}
$class-prefix: offset_;
@for $n from 1 through 24 {
  .#{$class-prefix}#{$n} {
    margin-left: ($n/24) * 100%;
  }
  @media (min-width: 576px) {
    $class-prefix: col_sm_;
    @for $n from 1 through 24 {
      .#{$class-prefix}#{$n} {
        width: ($n/24) * 100%;
      }
    }
    $class-prefix: col_sm_offset_;
    @for $n from 1 through 24 {
      .#{$class-prefix}#{$n} {
        width: ($n/24) * 100%;
      }
    }
  }
  @media (min-width: 768px) {
    $class-prefix: col_md_;
    @for $n from 1 through 24 {
      .#{$class-prefix}#{$n} {
        width: ($n/24) * 100%;
      }
    }
    $class-prefix: col_md_offset_;
    @for $n from 1 through 24 {
      .#{$class-prefix}#{$n} {
        width: ($n/24) * 100%;
      }
    }
  }
  @media (min-width: 992px) {
    $class-prefix: col_lg_;
    @for $n from 1 through 24 {
      .#{$class-prefix}#{$n} {
        width: ($n/24) * 100%;
      }
    }
    $class-prefix: col_lg_offset_;
    @for $n from 1 through 24 {
      .#{$class-prefix}#{$n} {
        width: ($n/24) * 100%;
      }
    }
  }
  @media (min-width: 1200px) {
    $class-prefix: col_xl_;
    @for $n from 1 through 24 {
      .#{$class-prefix}#{$n} {
        width: ($n/24) * 100%;
      }
    }
    $class-prefix: col_xl_offset_;
    @for $n from 1 through 24 {
      .#{$class-prefix}#{$n} {
        width: ($n/24) * 100%;
      }
    }
  }
  @media (min-width: 1600px) {
    $class-prefix: col_xxl_;
    @for $n from 1 through 24 {
      .#{$class-prefix}#{$n} {
        width: ($n/24) * 100%;
      }
    }
    $class-prefix: col_xxl_offset_;
    @for $n from 1 through 24 {
      .#{$class-prefix}#{$n} {
        width: ($n/24) * 100%;
      }
    }
  }
}
</style>
