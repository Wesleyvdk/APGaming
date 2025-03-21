import { mount } from "@vue/test-utils";
import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { createTestingPinia } from "@pinia/testing";
import InputBorder from "./input-border.vue";
import useEditor from "../../../../state";

vi.mock("../../../../state");

describe("InputBorder.vue", () => {
  let wrapper;
  let mockEditor;

  const createWrapper = (props = {}) => {
    wrapper = mount(InputBorder, {
      global: {
        plugins: [createTestingPinia()],
      },
      props: {
        title: "Border",
        border: {
          width: "1px",
          style: "solid",
          color: "#000000",
          radius: "0%",
        },
        ...props,
      },
    });
  };

  beforeEach(() => {
    vi.resetAllMocks();
    vi.restoreAllMocks();

    useEditor.mockReturnValue({
      colorPresets: ["#ff0000", "#00ff00", "#0000ff"],
    });
    mockEditor = useEditor();

    createWrapper();
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it("renders correctly with default props", () => {
    expect(wrapper.find(".input-label").text()).toBe("Border");
    expect(wrapper.findComponent({ name: "tglyr-input-number" }).exists()).toBe(
      true
    );
    expect(wrapper.findComponent({ name: "tglyr-select" }).exists()).toBe(true);
    expect(wrapper.findComponent({ name: "tglyr-color-picker" }).exists()).toBe(
      true
    );
  });

  it('renders radius input when title includes "radius"', async () => {
    createWrapper({ title: "Border radius" });
    await wrapper.vm.$nextTick();

    const inputNumber = wrapper.findComponent({ name: "tglyr-input-number" });
    expect(inputNumber.exists()).toBe(true);
    expect(inputNumber.props("suffix")).toEqual([
      { label: "px", value: "px" },
      { label: "%", value: "%" },
    ]);
  });

  it("emits input event when border width changes", async () => {
    const inputNumber = wrapper.findComponent({ name: "tglyr-input-number" });
    await inputNumber.vm.$emit("update:model-value", 5);

    expect(wrapper.emitted("input")).toBeTruthy();
    expect(wrapper.emitted("input")[0][0]).toEqual({
      width: "5px",
      style: "solid",
      color: "#000000",
      radius: "0%",
    });
  });

  it("emits input event when border style changes", async () => {
    const select = wrapper.findComponent({ name: "tglyr-select" });
    await select.vm.$emit("update:model-value", "dashed");

    expect(wrapper.emitted("input")).toBeTruthy();
    expect(wrapper.emitted("input")[0][0]).toEqual({
      width: "1px",
      style: "dashed",
      color: "#000000",
      radius: "0%",
    });
  });

  it("emits input event when border color changes", async () => {
    const colorPicker = wrapper.findComponent({ name: "tglyr-color-picker" });
    await colorPicker.vm.$emit("update:model-value", "#ff0000");

    expect(wrapper.emitted("input")).toBeTruthy();
    expect(wrapper.emitted("input")[0][0]).toEqual({
      width: "1px",
      style: "solid",
      color: "#ff0000",
      radius: "0%",
    });
  });

  it("emits input event when border radius changes", async () => {
    createWrapper({ title: "Border radius" });
    await wrapper.vm.$nextTick();

    const inputNumber = wrapper.findComponent({ name: "tglyr-input-number" });
    await inputNumber.vm.$emit("update:model-value", 10);

    expect(wrapper.emitted("input")).toBeTruthy();
    expect(wrapper.emitted("input")[0][0]).toEqual({
      width: "1px",
      style: "solid",
      color: "#000000",
      radius: "10px",
    });
  });

  it("handles invalid input gracefully", async () => {
    const inputNumber = wrapper.findComponent({ name: "tglyr-input-number" });
    await inputNumber.vm.$emit("update:model-value", "invalid");

    expect(wrapper.emitted("input")).toBeTruthy();
    expect(wrapper.emitted("input")[0][0]).toEqual({
      width: "invalid",
      style: "solid",
      color: "#000000",
      radius: "0%",
    });
  });

  it("passes color presets from Pinia store to color picker", () => {
    const colorPicker = wrapper.findComponent({ name: "tglyr-color-picker" });
    expect(colorPicker.props("presets")).toEqual(mockEditor.colorPresets);
  });
});
