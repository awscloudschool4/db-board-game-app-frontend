"use client";

import React from "react";
import { useEffect, useState } from "react";
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
import Link from "next/link";

interface ICafeReview {
  CafeID: number;
  Name: string;
  review_count: number;
}

interface ICafeScore {
  CafeID: number;
  Name: string;
  avg_rating: number;
}

interface ICafeSearch {
  CafeId: number;
}

const GameRecommendation = () => {
  const [cafeReview, setCafeReview] = useState<ICafeReview[]>([]);
  const [cafeScore, setCafeScore] = useState<ICafeScore[]>([]);
  const [cafeSearch, setCafeSearch] = useState<ICafeSearch[]>([]);

  async function getCafeReview() {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/cafe/api/cafe_review_rank`
      );
      const cafe_review = await response.json();
      if (cafe_review) return cafe_review;
    } catch (error) {
      return "Please check your server";
    }
  }

  async function getCafeScore() {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/cafe/api/cafe_review_avg_rank`
      );
      const cafe_score = await response.json();
      if (cafe_score) return cafe_score;
    } catch (error) {
      return "Please check your server";
    }
  }

  useEffect(() => {
    getCafeReview().then((cafe_review) => {
      //console.log(cafe_review.slice(0, 5));
      setCafeReview(cafe_review.slice(0, 5));
    });

    getCafeScore().then((cafe_score) => {
      setCafeScore(cafe_score.slice(0, 5));
    });
  }, []);

  return (
    <div>
      {" "}
      <Grid columns="2" gap="3" width="auto">
        <Card>
          <Heading className="justify-center text-center py-3">
            리뷰 많은 카페
          </Heading>
          {cafeReview.map((cafe, i) => (
            <Link href={`/cafe/${cafe.CafeID}`} id={String(cafe.CafeID)}>
              <Flex
                direction={"row"}
                gap={"2"}
                id={String(cafe.CafeID)}
                className="pl-10 py-2"
              >
                <h2>
                  {i + 1}. {cafe.Name}
                </h2>
                <p>({cafe.review_count})</p>
              </Flex>
            </Link>
          ))}
        </Card>
        <Card>
          <Heading className="justify-center text-center py-3">
            별점 높은 카페
          </Heading>
          {cafeScore.map((cafe, i) => (
            <Link href={`/cafe/${cafe.CafeID}`} id={String(cafe.CafeID)}>
              <Flex
                direction={"row"}
                gap={"2"}
                id={String(cafe.CafeID)}
                className="pl-10 py-2"
              >
                <h2>
                  {i + 1}. {cafe.Name}
                </h2>
                <p>({cafe.avg_rating})</p>
              </Flex>
            </Link>
          ))}
        </Card>
      </Grid>
    </div>
  );
};

export default GameRecommendation;
