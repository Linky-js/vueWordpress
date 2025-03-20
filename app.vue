<template>
  <Head>
    <Title>Lumatica - интернет магазин освещения</Title>
    <Meta
      name="description"
      content="Магазин освещения в Краснодаре с широким ассортиментом продукции"
    />
    <Meta name="yandex-verification" content="e490c6f4b37e1903" />
    <Meta
      name="google-site-verification"
      content="FNh4WtLjLHTiTomFdGINF_a52SB5CrTD0Uo-8xbUWV0"
    />
  </Head>
  <NuxtPage />
  <WidjetAudio2
    v-if="audioWidjet"
    :item="audioWidjet"
    @closeWidjet="audioWidjet = null"
  />
</template>