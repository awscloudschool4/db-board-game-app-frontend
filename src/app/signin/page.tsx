"use client";
import React, { useState } from "react";
import { debounce } from "lodash";
import { useRouter } from "next/navigation";
import {
  Flex,
  Card,
  Button,
  Heading,
  TextField,
  Text,
  IconButton,
} from "@radix-ui/themes";
import { EyeClosedIcon, EyeOpenIcon } from "@radix-ui/react-icons";

const SignInPage = () => {
  const [username, setUsername] = useState("");
  const [userpwd, setUserpwd] = useState("");
  const [pwdEyes, setPwdEyes] = useState(false);

  const usernameHandleChange = debounce((value) => {
    console.log(value);
  }, 300);

  const router = useRouter();
  return (
    <>
      <Card size="5">
        <Flex direction={"column"} gap={"5"}>
          <Heading
            as="h1"
            color="indigo"
            className="text-center"
            weight={"bold"}
          >
            로그인
          </Heading>
          <Text as={"label"} weight={"medium"}>
            <Flex direction={"column"} gap="2">
              아이디
              <TextField.Root>
                <TextField.Input
                  size="3"
                  placeholder="아이디"
                  onChange={(e) => usernameHandleChange(e.target.value)}
                />
              </TextField.Root>
            </Flex>
          </Text>
          <Text as={"label"} weight={"medium"}>
            <Flex direction={"column"} gap="2">
              비밀번호
              <TextField.Root>
                <TextField.Input
                  size="3"
                  type="password"
                  placeholder="비밀번호"
                />
                <TextField.Slot>
                  <IconButton variant="ghost">
                    {pwdEyes ? <EyeOpenIcon /> : <EyeClosedIcon />}
                  </IconButton>
                </TextField.Slot>
              </TextField.Root>
            </Flex>
          </Text>
          <Button size="3" variant="soft">
            로그인
          </Button>
          <span>
            <Text className="pr-3">아직 가입을 안하셨나요?</Text>
            <Button
              variant="ghost"
              size="3"
              className="underline"
              onClick={() => router.push("/signup")}
            >
              회원가입
            </Button>
          </span>
        </Flex>
      </Card>
    </>
  );
};

export default SignInPage;
