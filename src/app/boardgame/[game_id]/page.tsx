import React from "react";
import Image from "next/image";
import { StarIcon, StarFilledIcon } from "@radix-ui/react-icons";
import { TextArea } from "@radix-ui/themes";

interface Cafe {
  CafeID: number;
  Name: string;
  Location: string;
  PhoneNumber: string;
  OperatingHour: string;
  Image: string | null;
}

const sampleCafeData: Cafe[] = [
  {
    CafeID: 1,
    Name: "테스트 카페 1",
    Location: "서울시 서초구 somewhere over the rainbow",
    PhoneNumber: "010-1234-5678",
    OperatingHour: "9:00 ~ 24:00",
    Image: "https://www.jigsawexplorer.com/puzzles/subjects/spa-supplies.jpg",
  },
  {
    CafeID: 2,
    Name: "테스트 카페 2",
    Location: "서울시 서초구 somewhere over the rainbow",
    PhoneNumber: "010-1234-5678",
    OperatingHour: "9:00 ~ 24:00",
    Image: "https://www.jigsawexplorer.com/puzzles/subjects/avon-pub.jpg",
  },
  {
    CafeID: 3,
    Name: "테스트 카페 3",
    Location: "서울시 서초구 somewhere over the rainbow",
    PhoneNumber: "010-1234-5678",
    OperatingHour: "9:00 ~ 24:00",
    Image:
      "https://www.jigsawexplorer.com/puzzles/subjects/island-hut-423x300.jpg",
  },
];

const page = () => {
  return (
    <div>
      <TextArea placeholder="리뷰 남기기" size={"3"} />
    </div>
  );
};

export default page;
