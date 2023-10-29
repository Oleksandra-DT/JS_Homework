/*
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function myBlend(array) {
    for (let i = 0; i < arr.length; i++) {
        let index1 = Math.floor(Math.random() * (arr.length -1)),
            index2 = Math.floor(Math.random() * (arr.length - 1))

        let temporaryNumber = array[index1]
        array[index1] = array[index2]
        array[index2] = temporaryNumber
    }
    return array
}
console.log(arr)
console.log(myBlend(arr))*/

/*
const company = {
    name: 'Велика Компанія',
    type:'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
        {
            name: 'Клієнт 1',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
                {
                    name: 'Клієнт 1.1',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                },
                {
                    name: 'Клієнт 1.2',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                    partners: [
                        {
                            name: 'Клієнт 1.2.3',
                            type: 'subSubCompany',
                            uses: 'Рішення для продажу квитків',
                            sells: 'Рішення для продажу квитків',
                        }
                    ]
                }
            ]
        },
        {
            name: 'Клієнт 2',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків'
        }
    ],
    findValueByKey: function (companyName) {
        if (company.name === companyName) {
            return Object.entries(company);
        }
        else {
            for (let companyIndex in this.clients) {
                let companyInfo = this.clients[companyIndex]

                if (companyInfo.name === companyName) {
                    return companyInfo
                }
                let result = this.findValueInPartners(companyName, companyInfo)
                if (typeof result !== 'undefined') {
                    return result
                }
            }
        }
    },
    findValueInPartners: function (companyName, currentCompany) {
        if (!currentCompany.partners) {
            return;
        }
        for (let companyIndex in currentCompany.partners) {
            let companyInfo = currentCompany.partners[companyIndex]

            if (companyInfo.name === companyName) {
                return companyInfo
            }
            var result = this.findValueInPartners(companyName, companyInfo)
        }
        return result
    }
};

console.log(company.findValueByKey('Клієнт 2'))*/