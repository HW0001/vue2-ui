<template>
  <div class="g-col" :class="colClass" :style="colStyle">
    <slot />
  </div>
</template>
<script>
export default {
  name: "GCol",
  props: {
    span: { type: Number | String, default: 24 },
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
        ...this.getSpanAndOffset("sm", sm),
        ...this.getSpanAndOffset("md", md),
        ...this.getSpanAndOffset("lg", lg),
        ...this.getSpanAndOffset("xl", xl),
        ...this.getSpanAndOffset("xxl", xxl),
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
  methods: {
    getSpanAndOffset(name, obj) {
      const result = [];
      if (obj) {
        if (obj.span) result.push("col_" + name + "_" + obj.span);
        if (obj.offset) result.push("col_" + name + "_offset_" + obj.offset);
        else result.push("col_" + name + "_offset_" + 0);
        return result;
      } else {
        return [];
      }
    },
  },
};
</script>
<style lang="scss" scoped>
$class-prefix: span_;
@for $n from 1 through 24 {
  .#{$class-prefix}#{$n} {
    width: ($n/24) * 100%;
    box-sizing: border-box;
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
        margin-left: ($n/24) * 100%;
      }
    }
    .col_sm_offset_0 {
      margin-left: 0;
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
        margin-left: ($n/24) * 100%;
      }
    }
    .col_md_offset_0 {
      margin-left: 0;
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
        margin-left: ($n/24) * 100%;
      }
    }
    .col_lg_offset_0 {
      margin-left: 0;
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
        margin-left: ($n/24) * 100%;
      }
    }
    .col_xl_offset_0 {
      margin-left: 0;
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
        margin-left: ($n/24) * 100%;
      }
    }
    .col_xxl_offset_0 {
      margin-left: 0;
    }
  }
}
</style>
