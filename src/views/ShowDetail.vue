<template>
  <div class="show-detail"></div>
</template>

<script>
import { getShow, getShowImages } from "@/api/shows.api";

export default {
  name: "ShowDetail",
  props: {
    id: [Number, String]
  },
  data: () => {
    return {
      info: [],
      images: []
    };
  },
  mounted() {
    getShow(this.id).then(res => (this.info = res.data));
    getShowImages(this.id).then(res => (this.images = res.data));
  }
};
</script>
