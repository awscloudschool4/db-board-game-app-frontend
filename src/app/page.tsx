"use client";
import {
  Flex,
  TextField,
  Button,
  Card,
  Callout,
  Heading,
  Select,
  Grid,
  Inset,
} from "@radix-ui/themes";
import { MagnifyingGlassIcon, InfoCircledIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Recommendation from "@/components/CafeRecommendation";
import GameRecommendation from "@/components/CafeRecommendation";

export default function Home() {
  const [searchValue, setSearchValue] = useState("");
  const [filterValue, setFilterValue] = useState("game");
  return (
    <>
      <Flex direction={"column"} gap={"8"}>
        <Heading as="h1" className="text-center">
          보드게임 종합 검색
        </Heading>
        <Callout.Root>
          <Callout.Icon>
            <InfoCircledIcon />
          </Callout.Icon>
          <Callout.Text>
            이 프로젝트는 AWS Cloud School 4기 3조 박재연, 오현택, 이보림,
            최재원이 만들었습니다. DB 구현을 목표로한 프로젝트이므로, 동작안하는
            기능이 있어도 양해 부탁드립니다.
          </Callout.Text>
        </Callout.Root>
        <Flex gap="1" className="flex-col sm:flex-row w-full">
          <TextField.Root className="flex-grow">
            <TextField.Slot>
              <MagnifyingGlassIcon height="16" width="16" />
            </TextField.Slot>
            <TextField.Input size="3" placeholder="검색" />
          </TextField.Root>
          <Select.Root
            defaultValue="game"
            size="3"
            onValueChange={(value) => setFilterValue(value)}
          >
            <Select.Trigger className="w-1/5" />
            <Select.Content>
              <Select.Item value="game">보드게임</Select.Item>
              <Select.Item value="cafe">보드게임 카페</Select.Item>
              <Select.Item value="location">위치</Select.Item>
            </Select.Content>
          </Select.Root>
          <Button size="3">검색</Button>
        </Flex>
        <Heading>보드게임 추천</Heading>
        <GameRecommendation />
        <Heading>보드게임 카페 추천</Heading>
        <Recommendation />
      </Flex>
    </>
  );
}
