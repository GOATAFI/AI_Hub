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
    // Assuming `singleData.features` is an array
    let featuresHTML = "";
    for (const feature of singleData.features) {
      featuresHTML += `
      <li>${feature}</li>
      `;
    }

    dataCard.innerHTML = `
    <div class="card bg-base-100 w-96 shadow-xl">
        <figure>
            <img src="${singleData.image}" />
        </figure>
        <div class="card-body">
            <h2 class="card-title">${singleData.name}</h2>
            <p>${singleData.description}</p>
            <ol>
                ${featuresHTML}
            </ol>
            <div class="card-actions justify-end">
                <button class="btn btn-primary">Buy Now</button>
            </div>
        </div>
    </div>
`;
    showAiDataDiv.appendChild(dataCard);
  }
};

loadAiData();
