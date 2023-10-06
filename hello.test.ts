import { expect, vi, test } from "vitest";
import { testGreeter, greeter } from "./hello";

const log = vi.fn((data: any) => {});

vi.stubGlobal("Logger", {
  log,
});

test("greeter", () => {
  expect(greeter("Grant")).toBe("Hello, Grant!");
});

test("testGreeter", () => {
  expect(testGreeter()).toBe(undefined);
  expect(log.mock.calls[0]).toEqual(["Hello, Grant!"]);
});
