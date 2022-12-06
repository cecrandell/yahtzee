import {
  IonContent,
  IonPage,
  IonList,
  IonLabel,
  IonSelectOption,
  IonItem,
  IonSelect,
  IonHeader,
  IonToolbar,
  IonImg,
  IonAlert,
  IonButton,
  IonIcon,
} from "@ionic/react";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  refreshCircleOutline,
  refreshCircleSharp,
  personOutline,
  personSharp,
} from "ionicons/icons";
import Header from "./header.png";

const GamePage: React.FC = () => {
  const [aces, setAces] = useState<number>();
  const [twos, setTwos] = useState<number>();
  const [threes, setThrees] = useState<number>();
  const [fours, setFours] = useState<number>();
  const [fives, setFives] = useState<number>();
  const [sixes, setSixes] = useState<number>();
  const [threeOfAKind, setThreeOfAKind] = useState<number>();
  const [fourOfAKind, setFourOfAKind] = useState<number>();
  const [fullHouse, setFullHouse] = useState<number>();
  const [smallStraight, setSmallStraight] = useState<number>();
  const [largeStraight, setLargeStraight] = useState<number>();
  const [yahtzee, setYahtzee] = useState<number>();
  const [chance, setChance] = useState<number>();
  const [encouragement, setEncouragement] = useState<string>("");
  const [showAlert, setShowAlert] = useState(true);

  let history = useHistory();

  function handleClick() {
    history.go(0);
  }

  function upper() {
    let temp = 0;
    if (aces != undefined) {
      temp += aces;
    }
    if (twos != undefined) {
      temp += twos;
    }
    if (threes != undefined) {
      temp += threes;
    }
    if (fours != undefined) {
      temp += fours;
    }
    if (fives != undefined) {
      temp += fives;
    }
    if (sixes != undefined) {
      temp += sixes;
    }
    return temp;
  }

  function lower() {
    let temp = 0;
    if (threeOfAKind != undefined) {
      temp += threeOfAKind;
    }
    if (fourOfAKind != undefined) {
      temp += fourOfAKind;
    }
    if (fullHouse != undefined) {
      temp += fullHouse;
    }
    if (smallStraight != undefined) {
      temp += smallStraight;
    }
    if (largeStraight != undefined) {
      temp += largeStraight;
    }
    if (yahtzee != undefined) {
      temp += yahtzee;
    }
    if (chance != undefined) {
      temp += chance;
    }
    return temp;
  }

  const loser = ["Would it have killed ya?!", "Yikes!", "Stay with it!"];
  function yikes() {
    let num = Math.floor(Math.random() * 2);
    setEncouragement(loser[num]);
  }
  function hot(data: number) {
    setEncouragement(data + "'s are hot!");
  }
  function yahtzeeScored() {
    setEncouragement("What's the name of this game?!");
  }
  function bonusAchieved() {
    setEncouragement("Bonus achieved!");
  }
  const winner = [
    "What I'm wondering is: can anyone beat me?",
    "You got this!",
    "Nice!",
  ];
  function winning() {
    let num = Math.floor(Math.random() * 2);
    setEncouragement(winner[num]);
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButton onClick={() => setShowAlert(true)} slot="start">
            <IonIcon ios={personOutline} md={personSharp}></IonIcon>
          </IonButton>
          <IonImg src={Header}></IonImg>
          <IonButton slot="end" onClick={handleClick}>
            <IonIcon
              ios={refreshCircleOutline}
              md={refreshCircleSharp}
            ></IonIcon>
          </IonButton>
        </IonToolbar>
      </IonHeader>
      <IonAlert
        isOpen={showAlert}
        onDidDismiss={() => setShowAlert(false)}
        cssClass="my-custom-class"
        header={"What is your name?"}
        inputs={[
          {
            name: "name1",
            type: "text",
            placeholder: "Caroline",
          },
        ]}
        buttons={[
          {
            text: "Cancel",
            role: "cancel",
            cssClass: "secondary",
            handler: () => {
              setEncouragement("No one beats me!");
            },
          },
          {
            text: "OK",
            handler: (alertData) => {
              alertData.name1 != ""
                ? setEncouragement("No one beats " + alertData.name1 + "!")
                : setEncouragement("No one beats me!");
            },
          },
        ]}
      />
      Î
      <IonContent fullscreen>
        <div id="h6">{encouragement}</div>
        <IonList>
          <div className="sections">
            <IonItem lines="none">
              <IonLabel>Ones</IonLabel>
              <IonSelect
                value={aces}
                placeholder="Select One"
                onIonChange={(e) => {
                  setAces(parseInt(e.detail.value));
                  if (upper() + e.detail.value >= 63) {
                    bonusAchieved();
                  } else if (e.detail.value < 3) {
                    yikes();
                  } else if (e.detail.value > 3) {
                    hot(1);
                  } else {
                    winning();
                  }
                }}
              >
                <IonSelectOption value={0}>--</IonSelectOption>
                <IonSelectOption value={1}>1</IonSelectOption>
                <IonSelectOption value={2}>2</IonSelectOption>
                <IonSelectOption value={3}>3</IonSelectOption>
                <IonSelectOption value={4}>4</IonSelectOption>
                <IonSelectOption value={5}>5</IonSelectOption>
              </IonSelect>
            </IonItem>
            <IonItem lines="none">
              <IonLabel>Twos</IonLabel>
              <IonSelect
                value={twos}
                placeholder="Select One"
                onIonChange={(e) => {
                  setTwos(parseInt(e.detail.value));
                  if (upper() + e.detail.value >= 63) {
                    bonusAchieved();
                  } else if (e.detail.value < 6) {
                    yikes();
                  } else if (e.detail.value > 6) {
                    hot(2);
                  } else {
                    winning();
                  }
                }}
              >
                <IonSelectOption value={0}>--</IonSelectOption>
                <IonSelectOption value={2}>2</IonSelectOption>
                <IonSelectOption value={4}>4</IonSelectOption>
                <IonSelectOption value={6}>6</IonSelectOption>
                <IonSelectOption value={8}>8</IonSelectOption>
                <IonSelectOption value={10}>10</IonSelectOption>
              </IonSelect>
            </IonItem>
            <IonItem lines="none">
              <IonLabel>Threes</IonLabel>
              <IonSelect
                value={threes}
                placeholder="Select One"
                onIonChange={(e) => {
                  setThrees(parseInt(e.detail.value));
                  if (upper() + e.detail.value >= 63) {
                    bonusAchieved();
                  } else if (e.detail.value < 9) {
                    yikes();
                  } else if (e.detail.value > 9) {
                    hot(3);
                  } else {
                    winning();
                  }
                }}
              >
                <IonSelectOption value={0}>--</IonSelectOption>
                <IonSelectOption value={3}>3</IonSelectOption>
                <IonSelectOption value={6}>6</IonSelectOption>
                <IonSelectOption value={9}>9</IonSelectOption>
                <IonSelectOption value={12}>12</IonSelectOption>
                <IonSelectOption value={15}>15</IonSelectOption>
              </IonSelect>
            </IonItem>
            <IonItem lines="none">
              <IonLabel>Fours</IonLabel>
              <IonSelect
                value={fours}
                placeholder="Select One"
                onIonChange={(e) => {
                  setFours(parseInt(e.detail.value));
                  if (upper() + e.detail.value >= 63) {
                    bonusAchieved();
                  } else if (e.detail.value < 12) {
                    yikes();
                  } else if (e.detail.value > 12) {
                    hot(4);
                  } else {
                    winning();
                  }
                }}
              >
                <IonSelectOption value={0}>--</IonSelectOption>
                <IonSelectOption value={4}>4</IonSelectOption>
                <IonSelectOption value={8}>8</IonSelectOption>
                <IonSelectOption value={12}>12</IonSelectOption>
                <IonSelectOption value={16}>16</IonSelectOption>
                <IonSelectOption value={20}>20</IonSelectOption>
              </IonSelect>
            </IonItem>
            <IonItem lines="none">
              <IonLabel>Fives</IonLabel>
              <IonSelect
                value={fives}
                placeholder="Select One"
                onIonChange={(e) => {
                  setFives(parseInt(e.detail.value));
                  if (upper() + e.detail.value >= 63) {
                    bonusAchieved();
                  } else if (e.detail.value < 15) {
                    yikes();
                  } else if (e.detail.value > 15) {
                    hot(5);
                  } else {
                    winning();
                  }
                }}
              >
                <IonSelectOption value={0}>--</IonSelectOption>
                <IonSelectOption value={5}>5</IonSelectOption>
                <IonSelectOption value={10}>10</IonSelectOption>
                <IonSelectOption value={15}>15</IonSelectOption>
                <IonSelectOption value={20}>20</IonSelectOption>
                <IonSelectOption value={25}>25</IonSelectOption>
              </IonSelect>
            </IonItem>
            <IonItem lines="none">
              <IonLabel>Sixes</IonLabel>
              <IonSelect
                value={sixes}
                placeholder="Select One"
                onIonChange={(e) => {
                  setSixes(parseInt(e.detail.value));
                  if (upper() + e.detail.value >= 63) {
                    bonusAchieved();
                  } else if (e.detail.value < 18) {
                    yikes();
                  } else if (e.detail.value > 18) {
                    hot(6);
                  } else {
                    winning();
                  }
                }}
              >
                <IonSelectOption value={0}>--</IonSelectOption>
                <IonSelectOption value={6}>6</IonSelectOption>
                <IonSelectOption value={12}>12</IonSelectOption>
                <IonSelectOption value={18}>18</IonSelectOption>
                <IonSelectOption value={24}>24</IonSelectOption>
                <IonSelectOption value={30}>30</IonSelectOption>
              </IonSelect>
            </IonItem>
            <IonItem lines="none">
              <IonLabel slot="start">
                <b>TOTAL</b>
              </IonLabel>
              <IonLabel slot="end" className="left-align">
                {upper()}
              </IonLabel>
            </IonItem>
            <IonItem lines="none">
              <IonLabel slot="start">
                <b>BONUS (63+)</b>
              </IonLabel>
              <IonLabel slot="end" className="left-align">
                {upper() >= 63 ? 35 : 0}
              </IonLabel>
            </IonItem>
            <IonItem lines="none">
              <IonLabel slot="start">
                <b>TOTAL (UPPER)</b>
              </IonLabel>
              <IonLabel slot="end" className="left-align">
                {upper() >= 63 ? upper() + 35 : upper()}
              </IonLabel>
            </IonItem>
          </div>
          <IonItem lines="none">
            <IonLabel>3 of a Kind</IonLabel>
            <IonSelect
              value={threeOfAKind}
              placeholder="Select One"
              onIonChange={(e) => {
                setThreeOfAKind(parseInt(e.detail.value));
                if (e.detail.value < 18) {
                  yikes();
                } else {
                  winning();
                }
              }}
            >
              <IonSelectOption value={0}>--</IonSelectOption>
              <IonSelectOption value={5}>5</IonSelectOption>
              <IonSelectOption value={6}>6</IonSelectOption>
              <IonSelectOption value={7}>7</IonSelectOption>
              <IonSelectOption value={8}>8</IonSelectOption>
              <IonSelectOption value={9}>9</IonSelectOption>
              <IonSelectOption value={10}>10</IonSelectOption>
              <IonSelectOption value={11}>11</IonSelectOption>
              <IonSelectOption value={12}>12</IonSelectOption>
              <IonSelectOption value={13}>13</IonSelectOption>
              <IonSelectOption value={14}>14</IonSelectOption>
              <IonSelectOption value={15}>15</IonSelectOption>
              <IonSelectOption value={16}>16</IonSelectOption>
              <IonSelectOption value={17}>17</IonSelectOption>
              <IonSelectOption value={18}>18</IonSelectOption>
              <IonSelectOption value={19}>19</IonSelectOption>
              <IonSelectOption value={20}>20</IonSelectOption>
              <IonSelectOption value={21}>21</IonSelectOption>
              <IonSelectOption value={22}>22</IonSelectOption>
              <IonSelectOption value={23}>23</IonSelectOption>
              <IonSelectOption value={24}>24</IonSelectOption>
              <IonSelectOption value={25}>25</IonSelectOption>
              <IonSelectOption value={26}>26</IonSelectOption>
              <IonSelectOption value={27}>27</IonSelectOption>
              <IonSelectOption value={28}>28</IonSelectOption>
              <IonSelectOption value={29}>29</IonSelectOption>
              <IonSelectOption value={30}>30</IonSelectOption>
            </IonSelect>
          </IonItem>
          <IonItem lines="none">
            <IonLabel>4 of a Kind</IonLabel>
            <IonSelect
              value={fourOfAKind}
              placeholder="Select One"
              onIonChange={(e) => {
                setFourOfAKind(parseInt(e.detail.value));
                if (e.detail.value < 18) {
                  yikes();
                } else {
                  winning();
                }
              }}
            >
              <IonSelectOption value={0}>--</IonSelectOption>
              <IonSelectOption value={5}>5</IonSelectOption>
              <IonSelectOption value={6}>6</IonSelectOption>
              <IonSelectOption value={7}>7</IonSelectOption>
              <IonSelectOption value={8}>8</IonSelectOption>
              <IonSelectOption value={9}>9</IonSelectOption>
              <IonSelectOption value={10}>10</IonSelectOption>
              <IonSelectOption value={11}>11</IonSelectOption>
              <IonSelectOption value={12}>12</IonSelectOption>
              <IonSelectOption value={13}>13</IonSelectOption>
              <IonSelectOption value={14}>14</IonSelectOption>
              <IonSelectOption value={15}>15</IonSelectOption>
              <IonSelectOption value={16}>16</IonSelectOption>
              <IonSelectOption value={17}>17</IonSelectOption>
              <IonSelectOption value={18}>18</IonSelectOption>
              <IonSelectOption value={19}>19</IonSelectOption>
              <IonSelectOption value={20}>20</IonSelectOption>
              <IonSelectOption value={21}>21</IonSelectOption>
              <IonSelectOption value={22}>22</IonSelectOption>
              <IonSelectOption value={23}>23</IonSelectOption>
              <IonSelectOption value={24}>24</IonSelectOption>
              <IonSelectOption value={25}>25</IonSelectOption>
              <IonSelectOption value={26}>26</IonSelectOption>
              <IonSelectOption value={27}>27</IonSelectOption>
              <IonSelectOption value={28}>28</IonSelectOption>
              <IonSelectOption value={29}>29</IonSelectOption>
              <IonSelectOption value={30}>30</IonSelectOption>
            </IonSelect>
          </IonItem>
          <IonItem lines="none">
            <IonLabel>Full House</IonLabel>
            <IonSelect
              value={fullHouse}
              placeholder="Select One"
              onIonChange={(e) => {
                setFullHouse(parseInt(e.detail.value));
                if (e.detail.value != 25) {
                  yikes();
                } else {
                  winning();
                }
              }}
            >
              <IonSelectOption value={0}>--</IonSelectOption>
              <IonSelectOption value={25}>25</IonSelectOption>
            </IonSelect>
          </IonItem>
          <IonItem lines="none">
            <IonLabel>Small Straight</IonLabel>
            <IonSelect
              value={smallStraight}
              placeholder="Select One"
              onIonChange={(e) => {
                setSmallStraight(parseInt(e.detail.value));
                if (e.detail.value != 30) {
                  yikes();
                } else {
                  winning();
                }
              }}
            >
              <IonSelectOption value={0}>--</IonSelectOption>
              <IonSelectOption value={30}>30</IonSelectOption>
            </IonSelect>
          </IonItem>
          <IonItem lines="none">
            <IonLabel>Large Straight</IonLabel>
            <IonSelect
              value={largeStraight}
              placeholder="Select One"
              onIonChange={(e) => {
                setLargeStraight(parseInt(e.detail.value));
                if (e.detail.value != 40) {
                  yikes();
                } else {
                  winning();
                }
              }}
            >
              <IonSelectOption value={0}>--</IonSelectOption>
              <IonSelectOption value={40}>40</IonSelectOption>
            </IonSelect>
          </IonItem>
          <IonItem lines="none">
            <IonLabel>Yahtzee</IonLabel>
            <IonSelect
              value={yahtzee}
              placeholder="Select One"
              onIonChange={(e) => {
                setYahtzee(parseInt(e.detail.value));
                if (e.detail.value < 50) {
                  yikes();
                } else {
                  yahtzeeScored();
                }
              }}
            >
              <IonSelectOption value={0}>--</IonSelectOption>
              <IonSelectOption value={50}>50</IonSelectOption>
              <IonSelectOption value={150}>150</IonSelectOption>
              <IonSelectOption value={250}>250</IonSelectOption>
              <IonSelectOption value={350}>350</IonSelectOption>
            </IonSelect>
          </IonItem>
          <IonItem lines="none">
            <IonLabel>Chance</IonLabel>
            <IonSelect
              value={chance}
              placeholder="Select One"
              onIonChange={(e) => {
                setChance(parseInt(e.detail.value));
                if (e.detail.value < 18) {
                  yikes();
                } else {
                  winning();
                }
              }}
            >
              <IonSelectOption value={0}>--</IonSelectOption>
              <IonSelectOption value={5}>5</IonSelectOption>
              <IonSelectOption value={6}>6</IonSelectOption>
              <IonSelectOption value={7}>7</IonSelectOption>
              <IonSelectOption value={8}>8</IonSelectOption>
              <IonSelectOption value={9}>9</IonSelectOption>
              <IonSelectOption value={10}>10</IonSelectOption>
              <IonSelectOption value={11}>11</IonSelectOption>
              <IonSelectOption value={12}>12</IonSelectOption>
              <IonSelectOption value={13}>13</IonSelectOption>
              <IonSelectOption value={14}>14</IonSelectOption>
              <IonSelectOption value={15}>15</IonSelectOption>
              <IonSelectOption value={16}>16</IonSelectOption>
              <IonSelectOption value={17}>17</IonSelectOption>
              <IonSelectOption value={18}>18</IonSelectOption>
              <IonSelectOption value={19}>19</IonSelectOption>
              <IonSelectOption value={20}>20</IonSelectOption>
              <IonSelectOption value={21}>21</IonSelectOption>
              <IonSelectOption value={22}>22</IonSelectOption>
              <IonSelectOption value={23}>23</IonSelectOption>
              <IonSelectOption value={24}>24</IonSelectOption>
              <IonSelectOption value={25}>25</IonSelectOption>
              <IonSelectOption value={26}>26</IonSelectOption>
              <IonSelectOption value={27}>27</IonSelectOption>
              <IonSelectOption value={28}>28</IonSelectOption>
              <IonSelectOption value={29}>29</IonSelectOption>
              <IonSelectOption value={30}>30</IonSelectOption>
            </IonSelect>
          </IonItem>
          <IonItem lines="none">
            <IonLabel slot="start">
              <b>TOTAL (LOWER)</b>
            </IonLabel>
            <IonLabel slot="end" className="left-align">
              {lower()}
            </IonLabel>
          </IonItem>
          <IonItem lines="none">
            <IonLabel slot="start">
              <b>TOTAL (UPPER)</b>
            </IonLabel>
            <IonLabel slot="end" className="left-align">
              {upper() >= 63 ? upper() + 35 : upper()}
            </IonLabel>
          </IonItem>
          <IonItem lines="none">
            <IonLabel slot="start">
              <b>GRAND TOTAL</b>
            </IonLabel>
            <IonLabel slot="end" className="left-align">
              {upper() >= 63 ? upper() + lower() + 35 : upper() + lower()}
            </IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default GamePage;
