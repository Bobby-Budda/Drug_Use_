export function extractn(input) {
    return input ? input.map((entry) => {
        return entry.n 
    })
    .map((numString) => {
        return parseInt(numString,10)
    }) : []
}


const xlabels = [];
const yalcUsage = [];
const rnumbers = [];
const ymarijuana = [];
const ycocaine = [];
const ycrack = [];
const yheroin = [];
const yhallucinogen = [];
const yinhalant = [];
const ypainreleiver = [];
const yoxycontin = [];
const ytranquilizer = [];
const ystimulant = [];
const ymeth = [];
const ysedative = [];
const bubbledata = [];
const bubbledataAlcohol =[];
const bubbledataMarijuana =[];
const bubbledataCocaine =[];
const bubbledataCrack =[];
const bubbledataHeroin =[];
const bubbledataHallucinogen =[];
const bubbledataInhalant = [];
const bubbledataPainreleiver = [];
const bubbledataOxycontin =[];
const bubbledataTranquilizer = [];
const bubbledataStimulant = [];
const bubbledataMeth = [];
const bubbledataSedative = [];

export function ExtractUsePerDrug(input) {

    //Ein Bubble (Punkt) besteht aus folgenden Daten punkt1 = {x: Wert, y: Wert, r: Radius ein Pixelwert, deswegen muss die Anzahl der Personen durch einen Wert geteilt werden}

// DU hast ein Objekt input in der Hand
// Das Objekt muss zu einem String gemacht werden deswegen + ''
// diesen String nach jeder neuen zeile einmal in 13 Objekte (CSV Header Zeile + 12 Inhaltszeilen) splitten
// 12 Objekte für jeweils eine Zeile in der Hand 
// 12 Objekte kann man in Drogendaten splitten durch das "," getrennt

// Schreibt man alle Alkoholwerte in ein Array und das gleiche für jede Drogen art
// Sucht man sich die kombination von Alter, Anzahl und DrogenUse für jede der 12 Zeilen raus und speichert sie in einem Array 

// => liefert eine Instanz eines Objektes zurück die alle 3er Kombinationen für alle Drogenarten enthält


    const input2 = input+'';
    
    const table = input2.split('\n').slice(1);
    
    table.forEach(row => {
        
        const columns = row.split(',');
        
        const age = columns[0];
        if(age != 0){
        xlabels.push(age);
        const number = columns[1];
        rnumbers.push(number);            
        const alcUsage = columns[2];
        yalcUsage.push(alcUsage);
        const marijuana = columns[3];
        ymarijuana.push(marijuana);
        const cocaine = columns[4];
        ycocaine.push(cocaine);
        const crack = columns[5];
        ycrack.push(crack);
        const heroin = columns[6];
        yheroin.push(heroin);
        const hallu = columns[7];
        yhallucinogen.push(hallu);
        const inhalant = columns[8];
        yinhalant.push(inhalant);
        const painreleiver = columns[9];
        ypainreleiver.push(painreleiver);
        const oxycontin = columns[10];
        yoxycontin.push(oxycontin);
        const tranquilizer = columns[11];
        ytranquilizer.push(tranquilizer);
        const stimulant = columns[12];
        ystimulant.push(stimulant);
        const meth = columns[13];
        ymeth.push(meth); 
        const sedative = columns[14];
        ysedative.push(sedative);
        }
        
    });
   

    for(let i = 0; i< xlabels.length; i++){  
        // Alcohol
        const aobject = {x: xlabels[i], y:yalcUsage[i], r:rnumbers[i]/200};
        bubbledataAlcohol.push(aobject);
        // Marijuana
        const mobject = {x: xlabels[i], y:ymarijuana[i], r:rnumbers[i]/200};
        bubbledataMarijuana.push(mobject);
        //Cocaine
        const cobject = {x: xlabels[i], y:ycocaine[i], r:rnumbers[i]/200};
        bubbledataCocaine.push(cobject);
        //Crack
        const crackobject = {x: xlabels[i], y:ycrack[i], r:rnumbers[i]/200};
        bubbledataCrack.push(crackobject);
        //Heroin
        const hobject = {x: xlabels[i], y:yheroin[i], r:rnumbers[i]/200};
        bubbledataHeroin.push(hobject);
        //Hallucinogen
        const halluobject = {x: xlabels[i], y:yhallucinogen[i], r:rnumbers[i]/200};
        bubbledataHallucinogen.push(halluobject);
        //Inhalant
        const iobjekt = {x: xlabels[i], y:yinhalant[i], r:rnumbers[i]/200};
        bubbledataInhalant.push(iobjekt);
        //Pain-Releiver
        const pobjekt = {x: xlabels[i], y:ypainreleiver[i], r:rnumbers[i]/200};
        bubbledataPainreleiver.push(pobjekt);
        //Oxicontin
        const oobjekt = {x: xlabels[i], y:yoxycontin[i], r:rnumbers[i]/200};
        bubbledataOxycontin.push(oobjekt);
        //Tranqilizer
        const tobjekt = {x: xlabels[i], y:ytranquilizer[i], r:rnumbers[i]/200};
        bubbledataTranquilizer.push(tobjekt);
        //Stimulant
        const stobjekt = {x: xlabels[i], y:ystimulant[i], r:rnumbers[i]/200};
        bubbledataStimulant.push(stobjekt);
        //Meth
        const mobjekt = {x: xlabels[i], y:ymeth[i], r:rnumbers[i]/200};
        bubbledataMeth.push(mobjekt);     
        //Sedative
        const sobjekt = {x: xlabels[i], y:ysedative[i], r:rnumbers[i]/200};
        bubbledataSedative.push(sobjekt);               
        
      }

 
        this.alcohol = bubbledataAlcohol;
        this.marijuana = bubbledataMarijuana;
        this.cocaine = bubbledataCocaine;
        this.crack = bubbledataCrack; 
        this.heroin = bubbledataHeroin;
        this.hallucinogen = bubbledataHallucinogen;
        this.inhalant = bubbledataInhalant;
        this.painreleiver = bubbledataPainreleiver;
        this.oxycontin = bubbledataOxycontin;
        this.tranquilizer = bubbledataTranquilizer;
        this.stimulant = bubbledataStimulant;
        this.meth = bubbledataMeth;
        this.sedative = bubbledataSedative;
        this.xlabels = xlabels;
            
}