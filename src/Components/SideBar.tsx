import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSourceTypes, getTags } from "../api/api";
import Select from "react-select";
import {
  SideBarContainer,
  Input,
  Button,
  SelectContainer,
} from "../styles/sidebar";
import {
  setTags,
  setSelectedTag,
  setSourceTypes,
  setSelectedSourceType,
  filterNewsByKeyword,
} from "../Redux/newsSlice";
import { RootState } from "../store";

const SideBar: React.FC = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state: RootState) => state.news.loading);

  const tags = useSelector((state: RootState) => state.news.tags);
  const sourceTypes = useSelector((state: RootState) => state.news.sourceTypes);

  const [tempSelectedTag, setTempSelectedTag] = useState<{ value: number }[]>(
    []
  );
  const [tempSelectedSourceType, setTempSelectedSourceType] = useState<{
    value: number;
  }>();
  const [inputValue, setInputValue] = useState<string>("");

  const handleResetFilters = () => {
    setInputValue("");
    setTempSelectedTag([]);
    setTempSelectedSourceType(undefined);
    handleApplyFilters();
  };

  const handleApplyFilters = () => {
    dispatch(setSelectedTag(tempSelectedTag.map(({ value }) => value)));
    dispatch(setSelectedSourceType(tempSelectedSourceType?.value));
    dispatch(filterNewsByKeyword(inputValue));
  };

  useEffect(() => {
    const fetchTags = async () => {
      if (tags.length === 0) {
        const tagsData = await getTags();
        const formattedTags = tagsData.map(
          (tag: { tagId: number; title: string }) => ({
            value: tag.tagId,
            label: tag.title,
          })
        );
        dispatch(setTags(formattedTags));
      }
    };
    fetchTags();
  }, [dispatch, tags.length]);

  useEffect(() => {
    const fetchSourceTypes = async () => {
      if (sourceTypes.length === 0) {
        const sourceTypesData = await getSourceTypes();
        dispatch(setSourceTypes(sourceTypesData));
      }
    };
    fetchSourceTypes();
  }, [dispatch, sourceTypes.length]);

  return (
    <SideBarContainer>
      <h3 style={{ textAlign: "right" }}>فیلتر</h3>

      <Input
        type="text"
        placeholder="جستجوی عبارت"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        style={{
          marginBottom: "15px",
          padding: "10px",
          borderRadius: "8px",
          border: "1px solid #ccc",
        }}
      />

      <div>
        <SelectContainer>
          <Select
            options={tags}
            onChange={(selected) => setTempSelectedTag(selected)}
            value={tempSelectedTag}
            placeholder="جستجوی هشتگ"
            isClearable={true}
            isMulti
          />
        </SelectContainer>
        <Select
          options={sourceTypes.map((sourceType: any) => ({
            value: sourceType.id,
            label: sourceType.title,
          }))}
          onChange={(selected) => setTempSelectedSourceType(selected)}
          value={tempSelectedSourceType}
          placeholder="جستجوی مرجع"
          isClearable={true}
        />
      </div>

      <Button disabled={loading} onClick={handleApplyFilters}>
        {loading ? "در حال بارگذاری..." : "اعمال فیلتر"}
      </Button>

      <Button onClick={handleResetFilters}>ریست فیلترها</Button>
    </SideBarContainer>
  );
};
export default SideBar;
