const loadAiData = async () => {
  const res = await fetch(`https://openapi.programming-hero.com/api/ai/tools`);
  const data = await res.json();
  //   console.log(data.data.tools);
  const aiData = data.data.tools;
  //   console.log(aiData);
  displayData(aiData);
};

const displayData = (aiData) => {
  console.log(aiData);
  const showAiDataDiv = document.getElementById("show-ai-data");
  for (const singleData of aiData) {
    console.log(singleData);
    const dataCard = document.createElement("div");
    dataCard.innerHTML = `
    <h1>${singleData.description}</h1>
    `;
    showAiDataDiv.appendChild(dataCard);
  }
};

loadAiData();
