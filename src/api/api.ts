import axios from "axios";
import moment from "moment-jalaali";

const apiClient = axios.create({
  baseURL: "https://mehrapi.souma-p.ir/api/v1/",
  headers: {
    accept: "application/json",
  },
});

export interface GetNewsParams {
  skip?: number;
  take?: number;
  sourceTypeId?: number;
  selectedTags?: number[];
  searchKeyword?: string;
  selectedDay?: { from?: string; to?: string }
}

export const getNews = async (params: GetNewsParams = {}) => {
  const { take = 10, searchKeyword, selectedDay, sourceTypeId, selectedTags, skip } = params
  try {
    const payload = {
      skip,
      take,
      contentType: 0,
      fromDate: selectedDay?.from,
      toDate: selectedDay?.to,
      sourceTypeId,
      tagList: selectedTags,
      searchKeyword, 
    };

    console.log("Request payload:", payload);

    const response = await apiClient.post("Content/get-contents", payload);

    if (response.data.isSuccess) {
      console.log("Data received:", response.data.data);
      return response.data.data; 
    } else {
      console.error("API Error:", response.data.message);
      throw new Error(response.data.message || "Failed to fetch news"); 
    }
  } catch (error) {
    console.error("Failed to fetch news:", error);
    return []; 
  }
};
export const getSourceTypes = async () => {
  try {
    const response = await apiClient.get("Content/get-source-types");
    if (response.data.isSuccess) {
      console.log("Source Types:", response.data.data);
      return response.data.data;
    } else {
      console.error("Error fetching source types:", response.data.message);
      return [];
    }
  } catch (error) {
    console.error("Failed to fetch source types:", error);
    return [];
  }
};

export const getTags = async () => {
  try {
    const response = await apiClient.post("Content/get-tags", {
      skip: 0,
      take: 0,
      fromDate: moment().toISOString(),
      toDate: moment().toISOString(),
    });

    if (response.data.isSuccess) {
      console.log("Tags received:", response.data.data);
      return response.data.data;
    } else {
      console.error("Error fetching tags:", response.data.message);
      return [];
    }
  } catch (error) {
    console.error("Failed to fetch tags:", error);
    return [];
  }
};
