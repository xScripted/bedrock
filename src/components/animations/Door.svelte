<script lang="ts"></script>

<style lang="scss">
  $height: 450px;
  $width: 250px;

  .door {
    height: fit-content;
    width: fit-content;
    position: relative;

    .frame {
      height: $height;
      width: $width;

      border: 20px solid white;
    }

    .puerta {
      height: $height;
      width: $width;

      position: absolute;
      background-color: white;
    }
  }
</style>

<div class="door">
  <div class="frame" />
  <!--<div class="puerta">
    <div class="knob" />
  </div>-->
</div>
