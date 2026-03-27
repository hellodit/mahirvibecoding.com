<template>
  <div
    style="
      width: 1200px;
      height: 630px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      background: #f4f8f4;
      padding: 56px;
      color: #050315;
      font-family: Inter, Arial, sans-serif;
    "
  >
    <div
      style="
        display: flex;
        justify-content: space-between;
        align-items: stretch;
        gap: 32px;
        flex: 1;
      "
    >
      <div
        style="
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          width: 760px;
        "
      >
        <div
          style="
            display: flex;
            align-items: center;
            border-radius: 999px;
            border: 2px solid rgba(46,107,59,0.18);
            color: #2e6b3b;
            padding: 10px 18px;
            font-size: 20px;
            font-weight: 700;
            align-self: flex-start;
          "
        >
          {{ eyebrow }}
        </div>

        <div
          style="
            font-size: 64px;
            line-height: 1.1;
            font-weight: 800;
          "
        >
          {{ title }}
        </div>

        <div
          style="
            font-size: 28px;
            line-height: 1.45;
            color: rgba(5,3,21,0.72);
          "
        >
          {{ description }}
        </div>
      </div>

      <div
        style="
          width: 280px;
          border-radius: 36px;
          background: #2e6b3b;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 32px;
          color: white;
        "
      >
        <div style="font-size: 24px; opacity: 0.76;">MahirVibeCoding</div>
        <div style="display: flex; flex-direction: column; gap: 12px;">
          <div
            v-for="tag in displayTags"
            :key="tag"
            style="
              display: flex;
              border-radius: 999px;
              background: rgba(255,255,255,0.14);
              padding: 8px 14px;
              font-size: 18px;
              font-weight: 700;
              color: white;
            "
          >
            #{{ tag }}
          </div>
        </div>
      </div>
    </div>

    <div
      style="
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-top: 2px solid rgba(5,3,21,0.08);
        margin-top: 28px;
        padding-top: 22px;
        font-size: 24px;
        color: rgba(5,3,21,0.6);
      "
    >
      <div>{{ footer }}</div>
      <div>{{ siteName }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  title: string
  description: string
  tags?: string[]
  eyebrow?: string
  footer?: string
  siteName?: string
}>(), {
  tags: () => [],
  eyebrow: 'Articles',
  footer: 'Strategi AI-assisted development untuk developer Indonesia',
  siteName: 'mahirvibecoding.com',
})

const displayTags = props.tags.slice(0, 3)
</script>
