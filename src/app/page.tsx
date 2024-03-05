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

export default function Home() {
  const [searchValue, setSearchValue] = useState("");
  const [filterValue, setFilterValue] = useState("gamename");
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
            <TextField.Input
              size="3"
              placeholder="검색"
              value={searchValue}
              onChange={(e) => {
                setSearchValue(e.target.value);
              }}
            />
          </TextField.Root>
          <Select.Root
            defaultValue="gamename"
            size="3"
            onValueChange={(value) => setFilterValue(value)}
          >
            <Select.Trigger className="w-1/5" />
            <Select.Content>
              <Select.Group>
                <Select.Label>보드게임</Select.Label>
                <Select.Item value="gamename">보드게임 이름</Select.Item>
                <Select.Item value="gamenumber">보드게임 인원 수</Select.Item>
              </Select.Group>
              <Select.Separator />
              <Select.Group>
                <Select.Label>보드게임 카페</Select.Label>
                <Select.Item value="cafename">보드게임 카페 이름</Select.Item>
                <Select.Item value="location">보드게임 카페 위치</Select.Item>
              </Select.Group>
            </Select.Content>
          </Select.Root>
          <Button size="3">검색</Button>
        </Flex>
        <Heading>보드게임 및 보드게임 카페 추천</Heading>
        <Recommendation />
      </Flex>
    </>
  );
}
